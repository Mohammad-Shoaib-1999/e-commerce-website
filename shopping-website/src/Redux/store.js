import { configureStore } from "@reduxjs/toolkit";
import { ActionTypes } from "../Constant";

const initialState = {
  products: [],
  filter: [],
  cart: [],
  selectedProduct:null
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
        console.log("Second Action :-", state);
        return { ...state, products: [...state.products, payload] };

      case ActionTypes.ADD_TO_CART:
        console.log(" ADD_TO_CART :-", state);
        return { ...state, cart: [...state.cart, payload] };

      case ActionTypes.SELECTED_PRODUCT:
       
        return { ...state, selectedProduct:payload };
      default:
        break;
    }
    return initialState;
  },
});
