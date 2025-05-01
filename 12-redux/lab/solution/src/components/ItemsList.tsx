import React from "react"
import { useDispatch } from "react-redux";
import { removeBook, removeFilm } from "../librarySlice";
import Book from "../book";
import Film from "../film";

interface Props {
	items: (Book | Film)[],
	ordered?: boolean
}

export default function ItemsList({ items, ordered = false }: Props) {
	const dispatch = useDispatch();
	const handleRemove = (item: Book | Film) => {
		if ('title' in item) {
			dispatch(removeBook({ title: item.title }));
		} else if ('name' in item) {
			dispatch(removeFilm({ name: item.name }));
		}
	};

	if (items.length == 0) {
		return <div>[no items]</div>;
	} else {
		const ListTag = ordered ? "ol" : "ul";
		return (
			<ListTag>
				{items.map((item, i) => (
					<li key={i}>{item.toString()}
						<button onClick={() => handleRemove(item)}>Remove</button>
					</li>
				))}
			</ListTag>
		);
	}
}
