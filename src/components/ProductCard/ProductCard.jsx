import React from 'react';
import style from './productCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({products}) => 
{
    return (
        <>
            <ul className={style.productsContainer}>
                {products.map( (product) => 
                {
                    return(
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <li className={style.productCard}>
                            <img src={product.image} alt={product.title}/>
                            <span>Rate: {product.rating.rate}</span>
                            <span>{product.title}</span>
                            <span>{product.price}$</span>
                        </li>
                    </Link>)
                })}
            </ul>
        </>
    );
}

export default ProductCard;
