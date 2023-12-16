import React from 'react';
import './sortingButton.css';

const SortingButton = ({ setSorting, SORTING_OPTIONS }) => 
{
    return (
        <div>
            {Object.keys(SORTING_OPTIONS).map( (buttonName, index) => buttonName !== 'Default' && <button onClick={ () => setSorting(buttonName) } key={index} className='button-view'>{buttonName}</button>)}
        </div>
    );
}

export default SortingButton;
