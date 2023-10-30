import KommunicateBot from "../../Components/KommunicateBot";
import "./Dashboard.scss";
import homeIcon from "../../Assets/illustrations/loving.png";
import React, { useEffect, useState } from "react";
import Box from "../../Components/Box";
import dog from "../../Assets/illustrations/dog-jump.png";
import plant from "../../Assets/illustrations/plant.png";
import sprinting from "../../Assets/illustrations/sprinting.png";

export default function Dashboard() {
  return (
    <div className="dashCon">
      <div className="header">
        <div className="info">
          <h1>Kinder Care</h1>
          <h3>Educating your kids through AI </h3>
          <p>
            Through the power of artificial intelligence, <br /> Kindercare aims
            to help grow your kids knowledge
          </p>
          <Box image={dog} info={"Get help"} />

          <Box image={plant} info={"Ask questions "} />
          <Box image={sprinting} info={"Play games"} />
        </div>

        <img className="homeimg" src={homeIcon} />
      </div>
      <KommunicateBot />
    </div>
  );
}
