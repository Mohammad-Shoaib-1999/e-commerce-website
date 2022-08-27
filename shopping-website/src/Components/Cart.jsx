import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((state) => {
    return state.cart;
  });

  const [quantity, updateQuantity] = useState();
  
  const handleIncrement = () => {};

  const handleDecrement = () => {};

  useEffect(() => {
    updateQuantity(cartProducts);
  }, [cartProducts]);

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <div className="card-products">
            <img src={product.image}></img>
            <div>
              <div>{product.category}</div>
              <div>{product.title}</div>
              <div>Price:-{product.price}</div>
            </div>
            <div>
              {/* <button
                onClick={() => {
                  const updateArray = quantity.map((ele) => {
                    if (product.title === ele.title) {
                      ele.id += 1;
                    }
                    return ele;
                  });
                  updateQuantity(updateArray)
                }}
              >
                +
              </button>
              <input type="text" value={produ} />
              <button
                onClick={() => {
                  handleDecrement();
                }}
              >
                -
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
