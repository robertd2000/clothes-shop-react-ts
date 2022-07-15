import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productTypes";

export interface ICartItem extends IProduct {
  amount?: number;
}

interface ICart {
  itemsInCart: ICartItem[];
  cartTotalAmount: number;
  cartTotalQuantity: number;
}

const initialState: ICart = {
  itemsInCart: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0
};

const cartSliceName = "cart";

const cartSlice = createSlice({
  name: cartSliceName,
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);

      const cartItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem && cartItem.amount) {
        cartItem.amount++;
      } else {
        state.itemsInCart.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    },
    decreaseStuffQuantity(state, action) {
      const cartItem = state.itemsInCart.find(
        (item) => item.id === action.payload
      );
      if (cartItem && cartItem?.amount <= 1) {
        state.itemsInCart = state.itemsInCart.filter(
          (item) => item.id !== action.payload
        );
      }
      cartItem && cartItem.amount && cartItem.amount--;
    },
    clearCart: (state) => {
      state.itemsInCart = [];
    },
    getTotals: (state: ICart) => {
      const { cost, quantity } = state.itemsInCart.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem);

          const { price, amount = 1 } = cartItem;
          const itemTotal = price * amount;

          cartTotal.cost += itemTotal;
          cartTotal.quantity += amount;

          return cartTotal;
        },
        { cost: 0, quantity: 0 }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = cost;
    }
  }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
