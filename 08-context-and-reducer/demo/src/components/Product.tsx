
import React from "react"
import "./Product.css"
import { IItem } from "../reducers/cartReducer";
import { CartContext, ICartContext } from "../context/CartContext";

interface Props {
	item: IItem
}
export default function Product({ item }: Props) {
	const { name, price, image } = item;
	const { dispatch } = React.useContext(CartContext) as ICartContext;


	const removeItemFromCart = (itemId: string) => {
		dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
	};

	return (
		<div className="product">
			<img className="product-image" src={image} alt={name} />
			<div className="product-info">
				<h2 className="product-name">{name}</h2>
				<p className="product-price">Price: £{price}</p>
				<button className="product-remove-button" onClick={() => removeItemFromCart(item.id)}>
					Remove
				</button>
			</div>
		</div>
	);
};