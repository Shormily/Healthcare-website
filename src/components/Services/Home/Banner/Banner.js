import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import img2 from "../Banner/imges/img2.jpg";
import img1 from "../Banner/imges/img1.jpg";
import img3 from "../Banner/imges/img3.jpg";
import img4 from "../Banner/imges/img4.jpg";
import img5 from "../Banner/imges/img5.jpg";
import img6 from "../Banner/imges/img6.jpg";
import dc7 from "../Banner/imges/dc7.jpg";
import dc2 from "../Banner/imges/dc2.jpg";
import dc3 from "../Banner/imges/dc3.jpg";
import dc4 from "../Banner/imges/dc4.jpg";
import dc5 from "../Banner/imges/dc5.jpg";
import dc1 from "../Banner/imges/dc1.jpg";
import dc8 from "../Banner/imges/dc8.jpg";
import dc9 from "../Banner/imges/dc9.jpg";
import dc10 from "../Banner/imges/dc10.jpg";
import pic1 from "../Banner/imges/pic1.png";

import "./Banner.css";

const Banner = () => {
  return (
    <>
      {/* <h1 className="header"> Welcome To OurCity Hospital</h1> */}
      <Carousel className="slider" id="/">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="colorground">
        <h1 className="first-text"> Welcome To City Hospital</h1>
        <div className="class">
          <img className="image4" src={img5} alt="" />
          <p className="pragraph">
            We have different facilities in our hospital and the doctors always
            use the patients well. They always provide services to the patients
            day and night. They serve the people day and night. We are always
            engaged in trying to improve our hospital
          </p>
        </div>
        <div className="class">
          <p className="pragraph">
            General surgeons are doctors who specialize in surgical procedures.
            Surgery is any procedure that alters body tissues to diagnose or
            treat a medical condition. A general surgeon is part of a surgical
            team that also includes an anesthesiologist, nurses, and surgical
            technicians.This Disease good treatment our hospital.Our hospital
            doctors all time try the best treatment for our paritents
          </p>
          <img className="image4" src={img4} alt="" />
        </div>
        <div className="class">
          <img className="image4" src={img6} alt="" />
          <h1 className="text">Happy Doctors Our Hospital</h1>
        </div>
      </div>
      <div>
        <h1 className="foundation">Our Top 9 Doctors Name And Picture</h1>
        <div className="row margin">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc4} />
            <Card.Body>
              <Card.Title>Dr.Ovika</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc7} />
            <Card.Body>
              <Card.Title>Dr.Saikat</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc8} />
            <Card.Body>
              <Card.Title>Dr.Rifat</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc5} />
            <Card.Body>
              <Card.Title>Dr.Miskat</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc3} />
            <Card.Body>
              <Card.Title>Dr.Tazin</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc1} />
            <Card.Body>
              <Card.Title>Dr.Omar</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc2} />
            <Card.Body>
              <Card.Title>Dr.Ovik</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc9} />
            <Card.Body>
              <Card.Title>Dr.Jubin</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={dc10} />
            <Card.Body>
              <Card.Title>Dr.Raisa</Card.Title>
              <Card.Text>
                Our hospital best doctor and honest alaways try to good
                treatment
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <img src={pic1} alt="" />
          <h3>
            <span className="light">We Have Some Good News</span>
          </h3>
          <p className="pra">
            Sign up for Medicare newsletter to receive all the new offers and
            discounts from Medicare clinic. Discounts are only valid four our
            newsletter subscribers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
