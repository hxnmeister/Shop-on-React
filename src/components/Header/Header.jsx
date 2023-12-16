import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => 
{
    const [categories, setCategories] = useState(null);
    const [searchingText, setSearchingText] = useState('');
    const getCategories = async () => setCategories((await axios("https://fakestoreapi.com/products/categories")).data);

    useEffect(() =>
    {
        getCategories();
    }, []);

    if(!categories)
    {
        return (<h1 style={{textAlign: 'center'}}>Loading...</h1>);
    }

    return (
        <div className={style.navPanel}>
            <NavLink to={'/'}>HOME</NavLink>
            {categories.map( (category, index) => <NavLink to={`/${category}`} key={index}>{category.toUpperCase()}</NavLink> )}
            <br />
            <input type="text" value={searchingText} onChange={ (e) => setSearchingText(e.target.value) }/>
            <Link to={`/searching-results/${searchingText}`}><button>Find</button></Link>
        </div>
    );
}

export default Header;
