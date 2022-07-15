import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  name: string;
}

export enum RouteNames {
  PRODUCT_LIST = "/",
  PRODUCT = "/products/:id",
  CART = "/cart"
}

export const routes: IRoute[] = [
  {
    path: RouteNames.PRODUCT_LIST,
    element: Products,
    name: "Список продуктов"
  },
  { path: RouteNames.PRODUCT, element: Product, name: "Товар" },
  { path: RouteNames.CART, element: Cart, name: "Корзина" }
];
