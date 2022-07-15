import { memo, useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import ProductsList from "../feautures/products/ProductsList";
import CartItem from "../feautures/cart/CartItem";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/UseTypedSelector";

import SuccesBuModal from "../components/SuccesBuyModal";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    clearCart,
    decreaseStuffQuantity,
    deleteFromCart,
    addToCart,
    getTotals
  } = useActions();
  const { cartTotalAmount, cartTotalQuantity, itemsInCart } = useTypedSelector(
    ({ cart }) => cart
  );

  const onBuy = () => {
    clearCart();
    handleOpen();
  };

  useEffect(() => {
    getTotals();
  }, [itemsInCart]);

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div style={{ marginTop: "15%" }}>
        <h2>Всего товаров в корзине: {cartTotalQuantity}</h2>
        <h2>Общая стоимость: {cartTotalAmount}</h2>
        <Button
          onClick={onBuy}
          variant="outlined"
          color="success"
          endIcon={<LocalMallIcon />}
        >
          Оформить заказ
        </Button>
        <Button
          onClick={clearCart}
          variant="outlined"
          color="error"
          endIcon={<DeleteIcon />}
        >
          Очистить корзину
        </Button>
        <SuccesBuModal open={open} handleClose={handleClose} />
      </div>
      <Box sx={{ display: "flex" }}>
        <ProductsList
          products={itemsInCart}
          matchDownMd={matchDownMd}
          loading={false}
          error={false}
          Card={CartItem}
          addToCartHandler={addToCart}
          decreaseStuffQuantity={decreaseStuffQuantity}
          deleteFromCart={deleteFromCart}
        />
      </Box>
    </>
  );
};

export default memo(Cart);
