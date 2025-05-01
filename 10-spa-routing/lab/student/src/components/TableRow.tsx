import Book from "../book";
import Film from "../film";
import { useLibrary } from "../hooks/useLibrary";

interface Props {
	data: (Book | Film)[]
	head: boolean
	item?: Book | Film
}

export default function TableRow<T extends { toString(): string }>({ data, head = false, item }: Props<T>) {
	const { handleRemove } = useLibrary()

	const CellTag = head ? "th" : "td";
	return (
		<tr>
			{data.map((d, i) => (
				<CellTag key={i}>{d.toString()}</CellTag>
			))}
			{!head && (
				<td>
					<button onClick={() => handleRemove(item)}>Remove</button>
				</td>
			)}
		</tr>
	);
}
