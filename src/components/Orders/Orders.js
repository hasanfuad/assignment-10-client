import React from "react";
import { useParams } from "react-router";
import "./Orders.css";
import image1 from "./Products/Chips.png";

const Orders = () => {
    const {orderId} = useParams();
    console.log(orderId.name);
  return (
    <div class="shopping-cart">
      {/* <!-- Title --> */}

      <div class="title">Check Out</div>

      {/* <!-- Product #1 --> */}

      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
        <img style={{width: "100px"}} src={image1} alt="" />
        </div>

        <div class="description">
          <span>Common Projects</span>
          {/* <span>Bball High</span>  
          <span>White</span> */}
        </div>

        <div class="quantity">
            {/* <img style={{width: "100px"}} src={image1} alt="" /> */}
          {/* <button class="plus-btn" type="button" name="button">
          </button> */}
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
          {/* <button class="minus-btn" type="button" name="button">
          </button> */}
        </div>

        <div class="total-price">$549</div>
      </div>

      {/* <!-- Product #2 --> */}
      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
            <img style={{width: "100px"}} src={image1} alt="" />
        </div>

        <div class="description">
          <span>Maison Margiela</span>
          {/* <span>Future Sneakers</span>
          <span>White</span> */}
        </div>

        <div class="quantity">
            <img src="plus.svg" alt="" />
          {/* <button class="plus-btn" type="button" name="button">
          </button> */}
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
          {/* <button class="minus-btn" type="button" name="button">
          </button> */}
        </div>

        <div class="total-price">$870</div>
      </div>

      {/* <!-- Product #3 --> */}

      <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
            <img style={{width: "100px"}} src={image1} alt="" />
        </div>

        <div class="description">
          <span>Brown</span>
        </div>

        <div class="quantity">
            <img src="plus.svg" alt="" />
          {/* <button class="plus-btn" type="button" name="button">
          </button> */}
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
          {/* <button class="minus-btn" type="button" name="button">
          </button> */}
        </div>

        <div class="total-price">$349</div>
      </div>
    </div>
  );
};

export default Orders;
