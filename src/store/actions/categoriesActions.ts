import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../service";

enum categoriesActions {
  GET_CATEGORIES = "products/getCategories"
}

export const getCategoriesThunk = createAsyncThunk(
  categoriesActions.GET_CATEGORIES,
  async () => {
    const res = await getCategories();
    return res;
  }
);
