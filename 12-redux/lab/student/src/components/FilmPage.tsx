import { useLibrary } from "../hooks/useLibrary";
import FilmForm from "./FilmForm";
import ItemsList from "./ItemsList";
import Table from "./Table";

export default function FilmPage({ tabularFormat }: { tabularFormat: boolean }) {
	const { state: { films } } = useLibrary()
	return <>
		<FilmForm />
		{tabularFormat ? (
			<Table items={films} />
		) : (
			<ItemsList items={films} />)}
	</>
}