import Button from "@restart/ui/esm/Button";
import React from "react";


const EachOrder = (props) => {
    const {name, image, price} = props.order;
  return (
    <div className="shopping-cart">

      <div className="title">Check Out</div>

      <div className="item">

        <div className="image">
          <img style={{ width: "100px" }} src={image} alt="" />
        </div>

        <div className="description">
          <span>{name}</span>
        </div>

        <div className="quantity">
          <p>1</p>
        </div>

        <div className="total-price">${price}</div>
      </div>
      <Button
        style={{
          width: "150px",
          marginTop: "10px",
          border: "none",
          backgroundColor: "green",
          marginLeft: "37.5rem",
        }}
      >
        Check Out
      </Button>
    </div>
  );
};

export default EachOrder;
