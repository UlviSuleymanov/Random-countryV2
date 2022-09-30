import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Random from './Random';

const RandomCountryPage = () => {
  const [countries, setCountries] = useState([]);
  const [number, setNumber] = useState(0);
  const fetch = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(response.data);
  };

  const randomCountry = useCallback(() => {
    let randomNumers = () => {
      let randomNumber = Math.floor(Math.random() * countries.length);
      return randomNumber;
    };
    if (countries.length > 0) {
      setNumber(randomNumers());
    }
  }, [countries]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Random countries={countries} number={number} randomCountry={randomCountry} />
    </div>
  );
};

export default RandomCountryPage;
