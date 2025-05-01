import Book from "../book";
import Film from "../film";
import { useDispatch } from "react-redux";
import { removeBook, removeFilm } from "../librarySlice";

interface Props {
	data: (Book | Film)[]
	head: boolean
	item?: Book | Film
}

export default function TableRow({ data, head = false, item }: Props) {
	const dispatch = useDispatch();

	const handleRemove = (item: Book | Film) => {
		if ('title' in item) {
			dispatch(removeBook({ title: item.title }));
		} else if ('name' in item) {
			dispatch(removeFilm({ name: item.name }));
		}
	};

	const CellTag = head ? "th" : "td";
	return (
		<tr>
			{data.map((d, i) => (
				<CellTag key={i}>{d.toString()}</CellTag>
			))}
			{!head && item && (
				<td>
					<button onClick={() => handleRemove(item)}>Remove</button>
				</td>
			)}
		</tr>
	);
}
