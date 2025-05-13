import React, { useEffect, useState } from 'react';
import './FlagCard.css';

function FlagCard({searchString}) {
    const [countries, setCountries]=useState([]);
    let apiEndpoint = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

    async function getCountryFlag() {
        try{
            const response = await fetch(apiEndpoint);
            if(!response.ok){
                throw new Error(`Response Status: ${response.status}`);
            }
            const data = await response.json();
            setCountries(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data: '+error.message);
        }
    }


    useEffect(()=>{
        getCountryFlag();
    },[]);

    const filteredCountry = countries.filter((country)=>country.common.toLowerCase().includes(searchString.toLowerCase()));

  return (
    <div>
        <div className='card-list'>
            {filteredCountry.map((country)=>(
                <div className='countryCard' key={country.common}>
                    <img src={country.png} alt={`${country.common} Flag`} 
                    
                    />
                    <h2>{country.common}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FlagCard