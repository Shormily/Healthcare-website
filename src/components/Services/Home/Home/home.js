import React, { memo } from "react";
import Sevice from "../../../Serv2/Sevice";
import Banner from "../Banner/Banner";
import Serv from "../Serv";

const home = memo(() => {
  return (
    <div>
      <Banner></Banner>
      <Sevice></Sevice>
      <Serv></Serv>
    </div>
  );
});

export default home;
