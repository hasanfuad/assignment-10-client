import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./Products.css";

const Products = (props) => {
  const { image, name } = props.data;
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
      {/* <CardGroup> */}
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
          <h2> <span style={{ marginRight: "9rem", color: "green"}}>$200 </span>
          <Button className="btn btn-success">Buy Now</Button></h2>
        </Card.Footer>
      </Card>
      {/* </CardGroup> */}
    </div>
  );
};

export default Products;
