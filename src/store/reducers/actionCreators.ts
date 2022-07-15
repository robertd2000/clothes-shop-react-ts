import { productsSliceActions } from "./productsReducer";
import { categoriesActions } from "./categoryReducer";
import { cartAction } from "./cartReducer";

import { getProductListThunk } from "../actions/productActions";
import { getCategoriesThunk } from "../actions/categoriesActions";

export const allActionCreators = {
  ...productsSliceActions,
  ...categoriesActions,
  ...cartAction,
  getProductListThunk,
  getCategoriesThunk
};
