import React from "react";
import notfound from "../Services/Home/Banner/imges/notfound.jpg";
import { Link } from "react-router-dom";
import "./Notfound.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Notfound = () => {
  return (
    <div id="*" className="space">
      {/* <img className="decoration" src={notfound} alt="" /> */}
      <div>
        <Link to="/">
          <Button variant="warning" size="lg" active>
            Go Home
          </Button>
        </Link>
      </div>
      {/* <Link to="/" className="space">
        <Button variant="warning" size="lg" active>
          Go Home
        </Button>
      </Link> */}
      <img className="decoration" src={notfound} alt="" />
    </div>
  );
};

export default Notfound;
