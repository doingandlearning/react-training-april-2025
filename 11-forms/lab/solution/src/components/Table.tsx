import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Film from "../film";
import Book from "../book";

interface Props {
	items: (Book | Film)[]
}

export default function Table({ items = [] }: Props) {
	console.log(items)
	if (items.length == 0) {
		return <div>[no items]</div>;
	} else {
		return (
			<table>
				<TableHead sampleObject={items[0]} />
				<TableBody objects={items} />
			</table>
		);
	}
}