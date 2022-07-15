import { memo, useEffect } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Categories from "../feautures/categories/Categories";
import ProductsList from "../feautures/products/ProductsList";
import { ProductCard } from "../feautures/products/ProductCard";

import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/UseTypedSelector";

const Products = () => {
  const { getProductListThunk, addToCart, getTotals } = useActions();
  const { products, loading, error } = useTypedSelector(
    ({ product }) => product
  );

  const { categoryId } = useTypedSelector((state) => state.category);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getProductListThunk({ category: categoryId, offset: 0 });
  }, [categoryId]);

  const addoCartHandler = (item: any) => {
    addToCart(item);
    getTotals();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Categories mobile={matchDownMd} />
      <ProductsList
        products={products}
        loading={loading}
        error={error}
        matchDownMd={matchDownMd}
        addToCartHandler={addoCartHandler}
        Card={ProductCard}
      />
    </Box>
  );
};

export default memo(Products);
