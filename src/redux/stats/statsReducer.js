import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../Api';

const GET_CONTINENTS = 'corona/CONTINENTS/fulfilled';

const initialState = {
  status: 'empty',
  statsList: [],
};

export const fetchStats = createAsyncThunk('corona/CONTINENTS', async () => {
  const result = await fetchAPI('https://corona.lmao.ninja/v2/continents');
  return result;
});

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return {
        status: 'fetched',
        statsList: [...state.statsList, ...action.payload],
      };
    default:
      return state;
  }
};
//   default:
//     return state;
// }

export default statsReducer;
