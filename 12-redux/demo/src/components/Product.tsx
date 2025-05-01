import React from "react";
import './Product.css'
import { Product } from "../types.ts";

interface Props extends Product {
    onLike: () => void
    onRemove: () => void
}

export default function ProductComponent({ description, price, likes, mostRecentLike, onLike, onRemove }: Props) {

    return (
        <div className="product">
            <h2>{description}</h2>
            <div>Price: {price}</div>
            <div>Likes: {likes}</div>
            <div>Most recent like: {mostRecentLike ? mostRecentLike.toString() : 'n/a'}</div>
            <button onClick={onLike}>Like</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}
