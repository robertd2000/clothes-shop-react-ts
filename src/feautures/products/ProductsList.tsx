import React, { memo } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ImageList from "@mui/material/ImageList";
import Toolbar from "@mui/material/Toolbar";

import { ICartItem } from "../../store/reducers/cartReducer";

interface IProps {
  products: ICartItem[];
  matchDownMd: boolean;
  loading: boolean;
  error: boolean;
  addToCartHandler: (item: ICartItem) => void;
  deleteFromCart?: (id: number) => void;
  decreaseStuffQuantity?: (item: any) => void;
  Card: React.ElementType;
}

const ProductsList = ({
  products,
  matchDownMd,
  loading,
  error,
  addToCartHandler,
  Card,
  deleteFromCart,
  decreaseStuffQuantity
}: IProps) => {
  if (loading) {
    return <CircularProgress style={{ margin: "40% auto" }} />;
  }
  return (
    <Box component="main">
      <Toolbar />
      <ImageList variant="masonry" cols={matchDownMd ? 1 : 2} gap={8}>
        {products.length > 0 && !loading && !error ? (
          products.map((item) => (
            <Card
              key={item.id}
              {...item}
              addToCart={addToCartHandler}
              deleteFromCart={deleteFromCart}
              decreaseStuffQuantity={decreaseStuffQuantity}
            />
          ))
        ) : (
          <h2>Нет товаров</h2>
        )}
      </ImageList>
    </Box>
  );
};

export default memo(ProductsList);
