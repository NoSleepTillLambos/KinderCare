import React from "react";
import "./Box.scss";
export default function Box(card) {
  return (
    <div className="infoBlock">
      <div>
        <img src={card.image} className="boxImg" />
        <h5>{card.info}</h5>
      </div>
    </div>
  );
}
