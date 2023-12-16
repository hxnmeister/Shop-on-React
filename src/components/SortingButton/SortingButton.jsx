import React from 'react';

const SortingButton = ({ setSorting, SORTING_OPTIONS }) => 
{
    return (
        <div>
            {Object.keys(SORTING_OPTIONS).map( (buttonName, index) => buttonName !== 'Default' && <button onClick={ () => setSorting(buttonName) } key={index}>{buttonName}</button>)}
        </div>
    );
}

export default SortingButton;
