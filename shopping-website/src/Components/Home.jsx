import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/productActions";

const Home = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => {
    return state.products;
  });

  const [filteredProducts, setFilter] = useState(products);
  const [searchInp, setSearchInp] = useState("");
  const [filterCriteria, setfilterCriteria] = useState("");

  const filterProducts = (category) => {
    const updateProducts = products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setFilter(updateProducts);
  };

  useEffect(() => {
    if (filterCriteria === "") {
      setFilter(products);
      return;
    }
    let updatedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(filterCriteria.trim().toLowerCase())
    );
    setFilter(updatedProducts);
  }, [products, filterCriteria]);

  return (
    <>
      <div className="main-container">
        <div className="categories">
          <button
            className="btn"
            onClick={() => {
              setFilter(products);
            }}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn"
            onClick={() => {
              filterProducts("electronics");
            }}
          >
            Electronics
          </button>
        </div>

        <div className="search-form">
          <input
            type="search"
            className="search"
            onChange={(e) => {
              setSearchInp(e.target.value);
              if (e.target.value === "") {
                setfilterCriteria("");
              }
            }}
            value={searchInp}
          />
          <button
            className="btn"
            onClick={() => {
              setfilterCriteria(searchInp);
            }}
          >
            Search
          </button>
        </div>

        <div className="container">
          {filteredProducts?.map((item) => {
            return (
              <div key={item.id} className="card">
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={item.image} alt="" />

                  <h3>{item.title.substring(0, 12)}</h3>

                  <p className="price">Rs:-{item.price}</p>
                </Link>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
