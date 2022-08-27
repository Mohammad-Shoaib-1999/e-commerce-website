import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Homepage from "./Pages/Homepage";

import { LOCAL_STORAGE_LOGGED_USER_KEY } from "./Constant";
import { fetchAllProducts } from "./Apis/Products";
import { useDispatch, useSelector } from "react-redux";

import { setProduct } from "./Redux/productActions";
import AddProducts from "./Pages/AddProducts";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const dispatch = useDispatch();

  const [isloggeIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // This effect runs whenever `user` state variable changes
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  // This effect runs when component is mounted
  useEffect(() => {
    const loggedInUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_LOGGED_USER_KEY)
    );

    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      setUser(loggedInUser);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const result = fetchAllProducts();
    result.then((response) => {
      const allProducts = response.data;
      dispatch(setProduct(allProducts));
    });
  }, [dispatch]);

  return (
    <Router>
      <NavBar setUser={setUser} isLoggeIn={isloggeIn} user={user}></NavBar>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route
          path="/login"
          element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />}
        ></Route>

        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/addProducts" element={<AddProducts />}></Route>

        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
