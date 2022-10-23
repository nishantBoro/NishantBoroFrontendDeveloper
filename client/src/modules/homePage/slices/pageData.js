import { createSlice } from '@reduxjs/toolkit';

const pageData = createSlice({
  name: 'pageData',
  initialState: {
    searchResults: {}
  },
  reducers: {
    updateSearchResults(state, action) {
      // const { name, value } = action.payload || {};

      // state.values[name] = value;
    }
  }
});

export const selectSearchResultData = (state) => state.pageData.searchResults;

export const {
  updateSearchResults
} = pageData.actions;
export default pageData.reducer;
