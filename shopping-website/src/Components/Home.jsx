import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/productActions";

// import Cards from "./Cards";
// import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => {
    return state.products;
  });

  const [filter, setFilter] = useState(products);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  const handleClick = (filter) => {
    dispatch(addToCart(filter));
  };

  const Loading = () => {
    return <>loading...</>;
  };

  console.log(filter);

  const filterProducts = (category) => {
    const updateProducts = products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setFilter(updateProducts);
  };
  const ShowProducts = () => {
    return (
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
        <div className="container">
          {filter?.map((item) => {
            return (
				<div key={item.id} className="card">
					<Link to={`/product/${item.id}`} style={{textDecoration:"none"}} >
                  <img src={item.image} alt="" />

                  <h3>{item.title.substring(0, 12)}</h3>

                  <p className="price">Rs:-{item.price}</p>

                  <p>{item.category}</p>

				  </Link>
                  <button
                    className="btn"
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <ShowProducts></ShowProducts>
    </>
  );
};

export default Home;
