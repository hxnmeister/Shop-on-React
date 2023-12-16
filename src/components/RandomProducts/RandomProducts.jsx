import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { nanoid } from 'nanoid';

const RandomProducts = () => 
{
    const [allProducts, setAllProducts] = useState(null);
    const getAllProducts = async () => setAllProducts((await axios("https://fakestoreapi.com/products")).data);
    
    useEffect(() => 
    {
        getAllProducts();
    }, []);

    if(!allProducts)
    {
        return (<h1>Loading...</h1>);
    }

    console.log();

    return (
        <div>
            <ProductCard products={allProducts.sort(() => Math.random() - 0.5).slice(0, 10)}/>
        </div>
    );
}

export default RandomProducts;
