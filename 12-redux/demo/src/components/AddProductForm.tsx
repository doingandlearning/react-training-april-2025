import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import './AddProductForm.css';

import { addProduct } from '../productSlice.tsx';
function AddProductForm() {
	const dispatch = useDispatch();
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const onAddProduct = (event: FormEvent) => {
		event.preventDefault();
		if (description && price) {
			dispatch(addProduct(description, Number(price)));
			setDescription('');
			setPrice('');
		}
	};

	return (
		<div>
			<h2>Add a new product</h2>
			<form className="addProduct" onSubmit={onAddProduct}>
				<div>
					<label>Description</label>
					<input
						type="text"
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div>
					<label>Price</label>
					<input
						type="number"
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>

				<div>
					<button type="submit">Add Product</button>
				</div>
			</form>
		</div>
	);
}

export default AddProductForm;
