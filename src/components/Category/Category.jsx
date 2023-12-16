import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import SortingButton from '../SortingButton/SortingButton';

const Category = () => 
{
    const SORTING_OPTIONS = 
    {
        Default: () => true,
        LowerPrice: (a, b) => a.price - b.price,
        HigerPrice: (a, b) => b.price - a.price,
        LowerRate: (a, b) => a.rating.rate - b.rating.rate,
        HigerRate: (a, b) => b.rating.rate - a.rating.rate,
        Alphabet: (a, b) => a.title.localeCompare(b.title),
        ReverseAlphabet: (a, b) => b.title.localeCompare(a.title)
    };

    const {category} = useParams();
    const [products, setProducts] = useState(null);
    const [sorting, setSorting] = useState('Default');
    
    const getProducts = async () => setProducts((await axios(`https://fakestoreapi.com/products/category/${category}`)).data);
    
    useEffect(() =>
    {
        getProducts();
    }, [category]);
    
    if(!products)
    {
        return (<h1>Products Loading...</h1>);
    }

    return (
        <>
            <SortingButton setSorting={setSorting} SORTING_OPTIONS={SORTING_OPTIONS}/>
            <ProductCard products={products.sort(SORTING_OPTIONS[sorting])}/>
        </>
    );
}

export default Category;
