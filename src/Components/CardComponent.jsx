import React from "react";
import "./CardComponent.scss";

export default function CardComponent({ card, makeChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      makeChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="front" alt="cardFront">
          <img src={card.src} />

          <p className="diseaseInfo">{card.info}</p>
        </div>

        <img
          className="back"
          onClick={handleClick}
          src="/img/card.png"
          alt="cover"
        />
      </div>
    </div>
  );
}
