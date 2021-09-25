import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./Orders.css";
import image1 from "./Products/Chips.png";

const Orders = () => {
    const {orderId} = useParams();
    console.log(orderId);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${orderId}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [orderId])


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
        </div>

        <div class="quantity">
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
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
        </div>

        <div class="quantity">
            <img src="plus.svg" alt="" />
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
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
          <input type="text" name="name" value="1" />
            <img src="minus.svg" alt="" />
        </div>

        <div class="total-price">$349</div>
      </div>
      <Button style={{width: "150px",marginTop: "10px",border: "none", backgroundColor: "green", marginLeft: "37.5rem"}}>Check Out</Button>
    </div>
  );
};

export default Orders;
