import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Sevice from "../../Serv2/Sevice";
import Description from "../../Description/Description";
import "./Serv.css";
const Serv = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("../service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="service-container row  container" id="Serv">
      {services.map((service) => (
        <Sevice key={services.id} service={service}></Sevice>
      ))}
      <Description></Description>
    </div>
  );
};

export default Serv;
