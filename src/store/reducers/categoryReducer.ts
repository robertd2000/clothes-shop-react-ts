import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "../actions/categoriesActions";
import { ICategory } from "../../types/categoriesTypes";

interface InitialStateType {
  items: ICategory[];
  total: number;
  count: number;
  offset: number;
  limit: number;
  categoryId: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: InitialStateType = {
  items: [],
  total: 0,
  count: 0,
  offset: 0,
  limit: 0,
  categoryId: 0,
  loading: false,
  error: false,
  errorMessage: ""
};

const categoriesSliceName = "categories";

const categoriesSlice = createSlice({
  name: categoriesSliceName,
  initialState,
  reducers: {
    setOffset(state, action) {
      state.offset = action.payload;
    },
    setCategory(state, action) {
      state.categoryId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.items.push({
          id: 0,
          productIds: [0],
          imageUrl: "",
          name: "Все",
          url: "",
          productCount: state.count,
          description: "Все товары"
        } as ICategory);
        state.loading = false;
        state.count = action.payload.count;
        state.offset = action.payload.offset;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.loading = false;
        state.error = false;
      });
  }
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
