import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductList, getProduct } from "../../service";

enum productsActions {
  GET_PRODUCTS_LIST = "products/getProductsList"
  // GET_PRODUCT = "products/getProduct"
}

export const getProductListThunk = createAsyncThunk(
  productsActions.GET_PRODUCTS_LIST,
  async ({ offset, category }: { offset: number; category: number }) => {
    const res = await getProductList(offset, category);
    return res;
  }
);

// export const getProducthunk = createAsyncThunk(
//   productsActions.GET_PRODUCT,
//   async (productId: number) => {
//     const res = await getProduct(productId);
//     return res;
//   }
// );
