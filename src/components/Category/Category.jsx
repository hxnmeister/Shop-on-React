import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import SortingButton from '../SortingButton/SortingButton';
import style from './category.module.css';

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
    const SIZING_OPTIONS =
    {
        Default: '10em',
        Large: '20em'
    }

    const {id} = useParams();
    const [products, setProducts] = useState(null);
    const [sorting, setSorting] = useState('Default');
    const [size, setSize] = useState(SIZING_OPTIONS.Default);
    
    const getProducts = async () => setProducts((await axios(`https://fakestoreapi.com/products/category/${id}`)).data);
    
    useEffect(() =>
    {
        getProducts();
    }, [id]);
    
    if(!products)
    {
        return (<h1>Products Loading...</h1>);
    }

    return (
        <>
            <div className={style.sortingButtons}>
                <SortingButton setSorting={setSorting} SORTING_OPTIONS={SORTING_OPTIONS}/>
            </div>
            <div className={style.sizingButtons}>
                <button className='button-view' onClick={ () => setSize(SIZING_OPTIONS.Large) }>Large</button>
                <button className='button-view' onClick={ () => setSize(SIZING_OPTIONS.Default) }>Small</button>
            </div>
            <ProductCard products={products.sort(SORTING_OPTIONS[sorting])} size={size}/>
        </>
    );
}

export default Category;
