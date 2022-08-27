import { ActionTypes } from "../Constant";

export const setProduct = (products) => {
return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products
}
};

export const filterProduct = (products) =>{
    return{
        type:ActionTypes.FILTER_PRODUCTS,
        payload:products
    }
};

export const addNewProduct = (products) =>{
    return{
        type:ActionTypes.ADD_NEW_PRODUCTS,
        payload:products
    }
};

export const addToCart = (product) =>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const selectedProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}