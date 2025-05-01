import BookForm from "./BookForm"
import ItemsList from "./ItemsList"
import Table from "./Table"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export default function BookPage({ tabularFormat }: { tabularFormat: boolean }) {
	const books = useSelector((state: RootState) => state.library.books)

	return <>
		<BookForm />
		{tabularFormat ? (
			<Table items={books} />
		) : (
			<ItemsList items={books} />)}
	</>
}