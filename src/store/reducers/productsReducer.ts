import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productTypes";
import { getProductListThunk } from "../actions/productActions";

interface initialStateType {
  products: IProduct[];
  total: number;
  count: number;
  offset: number;
  limit: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: initialStateType = {
  products: [],
  total: 0,
  count: 0,
  offset: 0,
  limit: 100,
  loading: false,
  error: false,
  errorMessage: ""
};

const productsSliceName = "products";

const productsSlice = createSlice({
  name: productsSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductListThunk.fulfilled, (state, action) => {
        state.products = action.payload.items;
        state.count = action.payload.count;
        state.offset = action.payload.offset;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.loading = false;
        state.error = false;
      })
      .addCase(getProductListThunk.rejected, (state, action) => {
        state.error = true;
        state.errorMessage = "Не удалось загрузить спсок товаров";
      });
  }
});

export const productsSliceActions = productsSlice.actions;
export default productsSlice.reducer;
