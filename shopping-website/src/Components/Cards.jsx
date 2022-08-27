// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../Redux/productActions";


// const Cards = () => {
//     const dispatch = useDispatch()
//   const products = useSelector((state) => {
//     return state.products;
//   });


// const handleClick = (product) => {
//     dispatch(addToCart(product))
// }


//   return (
//     // Card Continer
//     <div className="container">
//       {products.length === 0 ? (
//         <div>No Products Available</div>
//       ) : (
//         products.map((product, idx) => {
//           return (
            
//             // Cards
//             <div key={product.id} className="card">
//               <img src={product.image} alt="" />

//               <h3>{product.title.substring(0,12)}</h3>

//               <p className="price">Rs:-{product.price}</p>

//               <p>{product.category}</p>

//               <button
//                 className="btn"
//                 onClick={() => {
//                   handleClick(product);
//                 }}
//               >
//                 Add to Cart
//               </button>
             
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Cards;
