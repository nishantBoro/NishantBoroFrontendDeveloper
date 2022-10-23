import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fieldNames, SEARCH_API_URL } from '../constants/searchBar';

const searchBar = createSlice({
  name: 'searchBar',
  initialState: {
    fields: {
      values: {
        [fieldNames.type]: '',
        [fieldNames.status]: '',
        [fieldNames.originalLaunch]: ''
      },
      errors: {
        [fieldNames.type]: '',
        [fieldNames.status]: '',
        [fieldNames.originalLaunch]: ''
      }
    }
  },
  reducers: {
    updateField(state, { payload } = {}) {
      const { id, value } = payload;

      state.fields.values[id] = value;
    }
  }
});

export const selectSearchBarFieldValues = (state) => state.homePage.searchBar.fields.values;
export const selectSearchBarFieldErrors = (state) => state.homePage.searchBar.fields.errors;

export const postSearch = createAsyncThunk(
  'searchBar/postSearch',
  async (payload) => {
    const apiURL = SEARCH_API_URL;

    request
      .post(apiURL)
      .send(payload)
      .accept('application/json')
      .then(() => {
        console.log('Success searching');
      })
      .catch((error) =>
        console.log('---Error searching', error)
      );
  }
);

export const {
  updateField
} = searchBar.actions;
export default searchBar.reducer;
