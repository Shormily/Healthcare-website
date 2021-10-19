import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";

const Sevice = ({ service }) => {
  const { id, name, img, description } = service;
  return (
    <div className="row col-lg-4 grid pb-3">
      <Card className="background container">
        <Card.Img className="img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <Card.Text className="color">{description}</Card.Text>
          <Link to={`/Description/${id}`}>
            <Button variant="warning">Description {name.toLowerCase()}</Button>
          </Link>
          {/* <Button variant="warning">Description {name.toLowerCase()}</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sevice;
