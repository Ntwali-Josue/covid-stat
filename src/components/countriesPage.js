import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Countries from './countries';
import { fetchCountries } from '../redux/stats/countriesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountriesPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesList);
  const status = useSelector((state) => state.countries.status);
  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchCountries());
    }
  }, [status]);

  const allCountries = countries.map((stat) => (
    <Countries
      key={uuidv4()}
      continent={stat.continent}
      deaths={stat.deaths}
      countries={stat.country}
    />
  ));

  return (
    <div>
      {allCountries}
    </div>
  );
};

export default CountriesPage;
