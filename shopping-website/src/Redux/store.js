import { configureStore } from "@reduxjs/toolkit";
import { ActionTypes } from "../Constant";

const initialState = {
  products: [],
  filter: [],
  cart: [],
  selectedProduct: null,
};
// Store
export const store = configureStore({
  //Reducer Function
  reducer: (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };

      case ActionTypes.ADD_NEW_PRODUCTS:
        return { ...state, products: [...state.products, payload] };

      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, selectedProduct: payload };

      case ActionTypes.ADD_TO_CART:
        console.log(state.cart)
        return { ...state, cart: [...state.cart.filter(item=>item.id !==payload.id), { ...payload, qty: 1 }] };

      case ActionTypes.UPDATE_CART:
        return {
          ...state, cart: payload,
        };
      case ActionTypes.DELETE_FROM_CART:
        return{
          ...state,cart:[...state.cart.filter(item=>item!==payload)]
        }

      default:
        break;
    }
    return initialState;
  },
});
