import { createSlice } from '@reduxjs/toolkit';

const pageData = createSlice({
  name: 'pageData',
  initialState: {
    searchResults: {
      data: {},
      metaData: {
        currentPage: 1,
        isSectionEnabled: false,
        isSectionLoading: true,
        infoModal: {
          isOpen: false,
          selectedId: ''
        }
      }
    }
  },
  reducers: {
    updateSearchResults(state, action) {
      const { metaData, results } = action.payload || {};

      state.searchResults.data = results;
      Object.assign(state.searchResults.metaData, metaData);
    },
    updateMetaData(state, action) {
      Object.assign(state.searchResults.metaData, action.payload);
    },
    openInfoModal(state, { payload }) {
      const { selectedId } = payload;

      state.searchResults.metaData.infoModal.isOpen = true;
      state.searchResults.metaData.infoModal.selectedId = selectedId;
    },
    closeInfoModal(state) {
      state.searchResults.metaData.infoModal.isOpen = false;
      state.searchResults.metaData.infoModal.selectedId = '';
    }
  }
});

export const selectSearchResultData = (state) => state.homePage.pageData.searchResults.data;
export const selectSearchResultMetaData = (state) => state.homePage.pageData.searchResults.metaData;

export const {
  updateSearchResults,
  updateMetaData,
  openInfoModal,
  closeInfoModal
} = pageData.actions;
export default pageData.reducer;
