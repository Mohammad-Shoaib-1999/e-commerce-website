import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Redux/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  //   const data = useSelector((state) => {
  //     return state.selectedProduct;
  //   });
  //   const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      let response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
     
      setProduct(response.data)
      // dispatch(selectedProduct(response));
    };
    
    fetchProductDetails();
}, []);

console.log(product.rating)


  return (
    <div className="product-details">
      <div className="right-side">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="left-side">
        <h4>{product.category}</h4>
        <h1>{product.title}</h1>
        <p>Rating {product.rating && product.rating.rate}  <i className="fa fa-star"></i></p>
        <h3>Rs {product.price}</h3>
        <p>{product.description}</p>
        <button className="btn">
            Add to 
            Cart
        </button>
        <Link to={"/cart"} >
            Go to cart
        </Link>
      
      </div>
        
    </div>
  );
};

export default ProductDetails;
