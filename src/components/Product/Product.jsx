import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => 
{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = async () => setProduct((await axios(`https://fakestoreapi.com/products/${id}`)).data);
    
    useEffect(() => 
    {
        getProduct();
    }, [id]);

    if(!product)
    {
        return (<h1>Product Loading...</h1>);
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Category: <Link to={`/${product.category}`}>{product.category.toUpperCase()}</Link></h3>
            <img src={product.image} alt={product.title} />
            <p>Rate: {product.rating.rate}</p>
            <p>Reviews: {product.rating.count};</p>
            <p>Price: {product.price}$</p>
            <br />
            <p>{product.description}</p>
        </div>
    );
}

export default Product;
