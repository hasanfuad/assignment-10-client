import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = (props) => {
  const { image, name, _id, key,price} = props.data;
//   console.log(props.data);
  return (
    <div
      style={{
        width: "400px",
        float: "left",
        display: "grid",
        gridTemplateColumns: "repeat(3, 25rem)",
        gridGap: "30px",
        marginLeft: "60px",
        marginTop: "40px",
      }}
    >
      <Card className="product-item">
        <Card.Img variant="top" style={{ width: "200px" }} src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="product-item-btn">
          <h2>
            {" "}
            <span style={{ marginRight: "9rem", color: "green" }}>${price} </span>
            <Link to= {"/orders/"+key} ><Button style={{width: "95px", height: "50px", backgroundColor: "green"}} className="btn btn-success">Buy Now</Button></Link>
          </h2>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Products;
