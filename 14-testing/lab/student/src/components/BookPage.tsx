import { useLibrary } from "../hooks/useLibrary"
import BookForm from "./BookForm"
import ItemsList from "./ItemsList"
import Table from "./Table"

export default function BookPage({ tabularFormat }: { tabularFormat: boolean }) {
	const { state } = useLibrary()

	const { books } = state
	return <>
		<BookForm />
		{tabularFormat ? (
			<Table items={books} />
		) : (
			<ItemsList items={books} />)}

	</>
}