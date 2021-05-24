import React from "react";
import "./ProductDetail.css";

const ProductDetail = ({ productInfo }) => {

    const regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;

    return (
      <div className="detail-container">
        <div className="row">
          <img src={productInfo.image} alt={productInfo.title} className="product-image" />
        </div>
        <div className="row">
          <div className="row-title">Name:</div>
          <div className="row-body">{productInfo.title}</div>
        </div>
        <div className="row">
          <div className="row-title">Description:</div>
          <div className="row-body">{productInfo.description}</div>
        </div>
        <div className="row">
          <div className="row-title">Price:</div>
          <div className="row-body">£{new Intl.NumberFormat('en-GB').format(productInfo.price)}</div>
        </div>
      </div>
    );
}

export default ProductDetail;
