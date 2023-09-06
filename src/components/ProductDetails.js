import React, { useState, useEffect } from 'react';

const ProductDetails = (props) => {
    const [product, setProduct] = useState(null);
    const productId = props.match.params.productId;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
