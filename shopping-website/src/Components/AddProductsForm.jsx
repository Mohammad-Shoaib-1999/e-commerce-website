import React, { useState } from "react";
// import "./Form.css";
import { addNewProduct } from "../Redux/productActions";
import { useDispatch } from "react-redux";

const AddProductsForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = () => {
    dispatch(addNewProduct(formData));
    console.log(formData)
    setFormData({
      id: 0,
      title: "",
      description: "",
      category: "",
      price: 0,
      image: "",
    });
  };
  return (
    <section>
      <div className="form">
        <h1>Add Data</h1>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-control">
          <button
            className="btn"
            onClick={() => {
              handleClick();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddProductsForm;
