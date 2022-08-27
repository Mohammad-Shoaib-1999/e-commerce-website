import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./NavBar.css";

import { LOCAL_STORAGE_LOGGED_USER_KEY } from "../Constant";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, setProduct } from "../Redux/productActions";

const NavBar = (props) => {
  const products = useSelector((state) => {
    return state.products;
  });

  const cartProducts = useSelector((state)=>{
    return state.cart
  })

  const dispatch = useDispatch();

  // State
  const [searchInp, setSearchInp] = useState("");
  
  const { isLoggeIn, user, setUser } = props;
  const navigate = useNavigate();

  //Logout
  function logOutUser() {
    setUser({});
    localStorage.setItem(LOCAL_STORAGE_LOGGED_USER_KEY, JSON.stringify({}));
    navigate("/login");
  }

  //useEffect for Search Bar
  useEffect(() => {

    let filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInp.trim().toLowerCase())
      );
  
    dispatch(setProduct(filteredProducts));
   
  }, [searchInp]);

  return (
    <header>
    

      <div className="navbar">
      
        <div className="left">
         
          <div className="logo">

            <Link to="/" className="site-title">E-Commerce</Link>
            
          </div>
          
          <div className="search-form">
           
            <input
              type="text"
              id="search"
              name="form-control"
              onChange={(e) => {
                setSearchInp(e.target.value);
              }}
              value={searchInp}
            />

          
            <button className="btn" onClick={() => setSearchInp(searchInp)}>
              Search
            </button>

          </div>
        </div>

        {/* Right Side */}

        <div className="right">

          <div className="login">
            <Link to="/login">{isLoggeIn ? "" : "Login"}</Link>
          </div>

          <div className="signup">
            <Link to="/signup">{isLoggeIn ? "" : "Signp up"}</Link>
          </div>

          <div className="user">
            <Link to="/username">{isLoggeIn ? user.username : ""}</Link>
          </div>

          <div className="logout" onClick={logOutUser}>
            {isLoggeIn ? "Logout" : ""}
          </div>

          <div>
            <Link to="/addProducts">Add Products</Link>
          </div>

          <div>
            <Link to="/cart">
            <span className="class-count">Cart:{cartProducts.length}</span>
            </Link>
          
          </div>

        </div>

      </div>
    </header>
  );
};

export default NavBar;
