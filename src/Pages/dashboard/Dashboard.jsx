import React from "react";
import dog from "../../Assets/illustrations/dog-jump.png";
import homeIcon from "../../Assets/illustrations/loving.png";
import plant from "../../Assets/illustrations/plant.png";
import sprinting from "../../Assets/illustrations/sprinting.png";
import Box from "../../Components/Box";
import "./Dashboard.scss";

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
          <Box image={dog} info={"Play games"} />

          <Box image={plant} info={"Get help"} />
          <Box image={sprinting} info={"Ask questions"} />
        </div>

        <img className="homeimg" src={homeIcon} />
      </div>
      {/* <KommunicateBot /> */}
    </div>
  );
}
