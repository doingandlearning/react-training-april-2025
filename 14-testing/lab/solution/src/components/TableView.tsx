export default function TableView({ items }: { items: (Book | Film)[] }) {
	return (
		<div>

			<Table items={films} />
		</div>
	);
}