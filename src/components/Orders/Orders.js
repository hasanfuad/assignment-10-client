import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EachOrder from "./EachOrder/EachOrder";
import "./Orders.css";

const Orders = () => {
    const {orderId} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${orderId}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [orderId]);


  return (
    <div >
        <EachOrder order={order}></EachOrder>
    </div>
  );
};

export default Orders;
