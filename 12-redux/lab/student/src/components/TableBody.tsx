import Book from "../book";
import Film from "../film";
import TableRow from "./TableRow";

interface Props {
	objects: (Book | Film)[]
}

export default function TableBody({ objects }: Props) {
	return (
		<tbody>
			{objects.map((obj, i) => (
				<TableRow key={i} data={Object.values(obj)} item={obj} />
			))}
		</tbody>
	);
}
