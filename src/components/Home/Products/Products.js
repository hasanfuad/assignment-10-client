import React from "react";
import { Card } from "react-bootstrap";
import "./Products.css";

const Products = (props) => {
  const { image, name } = props.data;
  return (
    <div style={{width: "400px"}}>
      {/* <CardGroup> */}
        <Card className="product-item">
          <Card.Img variant="top" style={{width: "200px"}} src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      {/* </CardGroup> */}
    </div>
  );
};

export default Products;
