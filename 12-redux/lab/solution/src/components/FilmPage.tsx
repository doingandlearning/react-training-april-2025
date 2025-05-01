import { useSelector } from "react-redux";
import FilmForm from "./FilmForm";
import ItemsList from "./ItemsList";
import Table from "./Table";
import { RootState } from "../store";

export default function FilmPage({ tabularFormat }: { tabularFormat: boolean }) {
	const films = useSelector((state: RootState) => state.library.films);
	return <>
		<FilmForm />
		{tabularFormat ? (
			<Table items={films} />
		) : (
			<ItemsList items={films} />)}
	</>
}