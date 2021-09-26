import Button from "@restart/ui/esm/Button";
import React from "react";


const EachOrder = (props) => {
    const {name, image, price} = props.order;
    console.log(name);
  return (
    <div class="shopping-cart">

      <div class="title">Check Out</div>

      <div class="item">
        {/* <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div> */}

        <div class="image">
          <img style={{ width: "100px" }} src={image} alt="" />
        </div>

        <div class="description">
          <span>{name}</span>
        </div>

        <div class="quantity">
          <p>1</p>
          {/* <img src="minus.svg" alt="" /> */}
        </div>

        <div class="total-price">${price}</div>
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
