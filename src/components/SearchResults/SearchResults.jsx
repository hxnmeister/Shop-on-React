import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const SearchResults = () => 
{
    const {query} = useParams();
    const [products, setProducts] = useState(null);
    const getProducts = async () => setProducts((await axios("https://fakestoreapi.com/products")).data);

    useEffect(() => 
    {
        getProducts();
    }, []);

    if(!products)
    {
        return (<h1>Loading...</h1>);
    }

    return (
        <div>
            <ProductCard products={products.filter( (product) => product.title.toLowerCase().includes(query.toLowerCase()) )}/>
        </div>
    );
}

export default SearchResults;
