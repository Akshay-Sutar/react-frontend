import React from "react";
import "./ItemCard.css";

export default function ItemCard({ product }) {
  return (
    <div className="col-md-4 p-2">
      <div className="card mt-3">
        <div className="product-1 align-items-center p-2 text-center">
          <img
            src={product.image}
            alt={product.image}
            className="rounded"
            width="160"
          ></img>
          <h5>{product.title}</h5>
          <div className="mt-3 info">
            <span className="product-category d-block text-uppercase">
              {product.category}
            </span>
            {/* <span className="text1 ">{product.description}</span> */}
          </div>
          <div className="cost mt-3 text-dark">
            <span>&#8377; {product.price}</span>
            <div className="star mt-3 align-items-center">
              <i className="fa fa-star"></i>
              <span>{product.rating.rate}</span>
            </div>
          </div>
        </div>
        <div className="p-3 add-to-cart text-center text-white mt-3 cursor">
          <span className="text-uppercase">Add to cart</span>
        </div>
      </div>
    </div>
  );
}
