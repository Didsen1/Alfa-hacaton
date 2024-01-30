import { createSlice } from '@reduxjs/toolkit';
import { fetchQuotesWithLimit } from './quotesApi';

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesState {
  quotes: Quote[];
  isLoading: boolean;
  isError: boolean;
  error: unknown[];
}

const initialState: QuotesState = {
  quotes: [],
  isLoading: false,
  isError: false,
  error: [],
};

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotesWithLimit.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchQuotesWithLimit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload.quotes;
      state.isError = false;
    });

    builder.addCase(fetchQuotesWithLimit.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error.push(action.payload);
    });
  },
});

export const {} = quotesSlice.actions;

export default quotesSlice.reducer;
