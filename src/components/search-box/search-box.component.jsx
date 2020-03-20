import React from 'react';
import './search-box.styles.css';

    //The placeholder and handleChange props are so that the compoenent can be used on some other parts of the code and don't be specific to a screen or functionality.

export const SearchBox = ({ placeholder, handleChange }) => (

    <input className='search' type='search' placeholder={placeholder} onChange={handleChange}/> 
);