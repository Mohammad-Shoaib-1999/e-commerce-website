import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCart } from "../Redux/productActions";

const Cart = () => {

  const dispatch =useDispatch()


  const cartProducts = useSelector((state) => {
    return state.cart;
  });
console.log(cartProducts)

const [cart,setCart]= useState()
 console.log(cart)
  


  useEffect(() => {
   
    setCart(cartProducts)
  }, [cartProducts]);

  const updateProductQty =(id,qty,products)=>{
    // console.log("id:-",id)
    // console.log("qty:-",qty)
    // console.log("products:-",products)
    const updateProducts = JSON.parse(JSON.stringify(products));
    const indexToUpdate = updateProducts.findIndex((cartProduct)=>cartProduct.id === id)
    console.log(updateProducts[indexToUpdate])
    updateProducts[indexToUpdate].qty = qty > 0 ? qty : 1;
    return updateProducts

  }

  return (
    <div className="cart-container">
      {cart?.map((product) => {
        return (
          <div key={product.id} className="cart-products">
            <img src={product.image}></img>
            <div className="content">
              <div>{product.title}</div>
              <div><p>Category :- {product.category}</p></div>
              <div>Price:-{product.price}</div>
              <div> <span>{product.qty} X {product.price} = {product.qty*product.price} </span></div>
              <div>
              <button
                onClick={() => {
                 const increaseQty = updateProductQty(product.id,product.qty+1,cart)
                  dispatch(updateCart(increaseQty))
                }}
              >
                +
              </button>
             
              <button
                 onClick={() => {
                  const increaseQty = updateProductQty(product.id,product.qty-1,cart)
                   dispatch(updateCart(increaseQty))
                 }}
              >
                -
              </button>
            </div>
            </div>
          
            <div>

            <button onClick={()=>{
              dispatch(deleteFromCart(product))
            }}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
