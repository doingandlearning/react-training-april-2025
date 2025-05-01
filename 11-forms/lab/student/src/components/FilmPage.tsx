import { useLibrary } from "../hooks/useLibrary";
import ItemsList from "./ItemsList";
import Table from "./Table";

export default function FilmPage({ tabularFormat }: { tabularFormat: boolean }) {
	const { state: { films } } = useLibrary()
	return <>
		{tabularFormat ? (
			<Table items={films} />
		) : (
			<ItemsList items={films} />)}
	</>
}