import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Quote } from './quotesSlice';

export const fetchQuotesWithLimit = createAsyncThunk<{ quotes: Quote[] }, number>(
  'quotes/fetchWithLimit',
  async (limit: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/quotes/?limit=${limit}`);
      return await response.json();
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
