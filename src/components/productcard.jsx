import React from "react";
import ViewProductButton from "./button";

const productCard = () => {
    const product = {
        image: "https://placehold.co/150",
        name: "myPhone",
        price: "₹90,000",
    }
    return (
        <div>
            <img src={product.image} alt="iPhone Image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <ViewProductButton />
        </div>
    );
};

export default productCard;