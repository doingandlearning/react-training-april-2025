import { Link } from "react-router-dom";
import ProductCatalog from "../ProductCatalog";

export default function Products() {
	const products = ProductCatalog.getAllProductItems()
	return (
		<>
			<h1>Products</h1>
			<ul>{products.map((product, i) =>
				<li key={i}>
					<Link to={`/products/${product.id}`}>
						{product.description}
					</Link>
				</li>)}</ul>
		</>
	);
}

