import KommunicateBot from "../../Components/KommunicateBot";
import "./Dashboard.scss";
import homeIcon from "../../Assets/illustrations/loving.png";

import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="header">
        <h1>Kinder Care</h1>
        <h3>Educating your kids the right way</h3>
        <img className="homeimg" src={homeIcon} />
      </div>
      <KommunicateBot />
    </div>
  );
}
