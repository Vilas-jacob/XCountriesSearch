import React, { useState } from 'react';
import './Search.css';


function Search({setSearchString}) {
    const [countryName,setCountryName]=useState('');

    const handleChange = (e)=>{
        setCountryName(e.target.value);
        setSearchString(e.target.value);
    }
  return (
    <div className='SearchBar'>
        <input type='text' placeholder='Search for Countries...' value={countryName} onChange={handleChange}></input>
    </div>
  )
}

export default Search