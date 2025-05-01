import TableRow from "./TableRow"

interface Props<T extends object> { sampleObject: T }

export default function TableHead<T extends object>({ sampleObject }: Props<T>) {
	return (
		<thead>
			<TableRow data={[...Object.keys(sampleObject), "Actions"]} head={true} />
		</thead>
	);
}