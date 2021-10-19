import React from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import dc7 from "../Services/Home/Banner/imges/dc7.jpg";
import dc4 from "../Services/Home/Banner/imges/dc4.jpg";
import dc9 from "../Services/Home/Banner/imges/dc9.jpg";
import dc10 from "../Services/Home/Banner/imges/dc10.jpg";
import dc1 from "../Services/Home/Banner/imges/dc1.jpg";
import dc3 from "../Services/Home/Banner/imges/dc3.jpg";
import dc2 from "../Services/Home/Banner/imges/dc2.jpg";
import dc8 from "../Services/Home/Banner/imges/dc8.jpg";
import dc5 from "../Services/Home/Banner/imges/dc5.jpg";

const Description = ({ service }) => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This id description:{serviceId}</h2>
      <p className="pra">
        The following cards have the names and designs of the doctors of each
        subject
      </p>
      <div className="row margin">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc4} />
          <Card.Body>
            <Card.Title>Dr.Ovika</Card.Title>
            <Card.Text>
              <p>Erythema-multiforme-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc7} />
          <Card.Body>
            <Card.Title>Dr.Saikat</Card.Title>
            <Card.Text>
              <p>General-Surgeon-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc8} />
          <Card.Body>
            <Card.Title>Dr.Rifat</Card.Title>
            <Card.Text>
              <p>kidney-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc5} />
          <Card.Body>
            <Card.Title>Dr.Miskat</Card.Title>
            <Card.Text>
              <p>Thyroid-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc3} />
          <Card.Body>
            <Card.Title>Dr.Tazin</Card.Title>
            <Card.Text>
              <p>Plastic-surgery-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc1} />
          <Card.Body>
            <Card.Title>Dr.Omar</Card.Title>
            <Card.Text>
              <p>Diabetes-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc2} />
          <Card.Body>
            <Card.Title>Dr.Ovik</Card.Title>
            <Card.Text>
              <p>Neurologist-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc9} />
          <Card.Body>
            <Card.Title>Dr.Jubin</Card.Title>
            <Card.Text>
              <p>Cardiologist-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={dc10} />
          <Card.Body>
            <Card.Title>Dr.Raisa</Card.Title>
            <Card.Text>
              <p>Sexul-problem-Specialist</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Description;
