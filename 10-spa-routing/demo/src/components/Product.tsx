import { useNavigate, useParams, useLocation } from "react-router-dom"
import ProductCatalog from "../ProductCatalog"

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

export default function ProductDetail() {
	// get the id from url
	const { productId } = useParams()

	const navigate = useNavigate()
	// const location = useLocation()

	// const queryParameters = new URLSearchParams(location.search)
	const query = useQuery()
	console.log(query.get("filter"))
	// look up the product based on the id
	const product = ProductCatalog.getProductItemById(productId!)

	// render it to the dom

	if (!product) {
		return <div><h2>Product not found.</h2></div>
	}

	function handleClick() {
		console.log("Do some work ... ")
		navigate("/")
	}

	return <div>
		<h2>Product Details</h2>
		<button onClick={handleClick}>Go home</button>
		<p>
			{product?.description}
		</p>
		<p>£{product?.price.toLocaleString()}</p>
		<p>Likes: {product?.likes}</p>
		<p>Most recent like: {product?.mostRecentLike}</p>
	</div>
}