import { createSlice } from '@reduxjs/toolkit';

const searchBar = createSlice({
  name: 'searchBar',
  initialState: {
    fields: {}
  },
  reducers: {
    updateField(state, action) {

    }
  }
});

export const {
  updateSearchResults
} = searchBar.actions;
export default searchBar.reducer;
