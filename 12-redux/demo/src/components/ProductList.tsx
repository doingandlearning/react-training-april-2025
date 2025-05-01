import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store.ts";
import { addProduct, likeProduct, removeProduct, sortProducts } from "../productSlice.tsx";


import ProductComponent from './Product.tsx'

function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.products);
    const sortBy = useSelector((state: RootState) => state.product.sortBy);

    // In the code below, note in particular how we dispatch actions to Redux via the dispatch() function.
    return (
        <div>
            <h1>Totally Awesome Products</h1>
            {(products.length === 0) ?
                <div>No products</div> :
                products.map((p: Product) => {
                    return <ProductComponent
                        {...p}
                        onLike={() => { dispatch(likeProduct(p.id)) }}
                        onRemove={() => { dispatch(removeProduct(p.id)) }} />
                }
                )
            }
        </div>
    )
}
export default ProductList
