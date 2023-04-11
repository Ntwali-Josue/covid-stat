import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../Api';

const GET_COUNTRIES = 'corona/COUNTRIES/fulfilled';

const initialState = {
  status: 'empty',
  countriesList: [],
};

export const fetchCountries = createAsyncThunk('corona/COUNTRIES', async () => {
  const result = await fetchAPI('https://corona.lmao.ninja/v2/countries');
  return result;
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        status: 'fetched',
        countriesList: [...state.countriesList, ...action.payload],
      };
    default:
      return state;
  }
};

export default countriesReducer;
