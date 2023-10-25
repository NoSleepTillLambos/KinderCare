import React, { useEffect, useState } from "react";
import "./GamePage.scss";
import CardComponent from "../../Components/CardComponent";

const cardImages = [
  {
    src: "/img/bird.png",
    matched: false,
    name: "Ralph",
    info: "Chemotherapy is when doctors use medicines to treat cancer. Cancer is a disease that causes bad cells in the body to stop the good cells from doing their job",
  },
  {
    src: "/img/cat.png",
    matched: false,
    name: "Paul",
    info: "Malaria is an infection caused by parasite like mosquitoes. It is passed between people and can lead to terrible things such as chills, fevers and other symptoms",
  },
  {
    src: "/img/cat1.png",
    matched: false,
    name: "Toby",
    info: "Leukemia is a cancer found in your blood. The cancer cells grow in the bone marrow and find their way into the blood, this can often make you feel weak and tired.",
  },
  {
    src: "/img/dog.png",
    matched: false,
    name: "Jake",
    info: "Hodgkin lymphoma is a type of cancer in the lymphatic system, this is the part of the immune system which helps to fight diseases and infections.",
  },
  {
    src: "/img/kitten.png",
    matched: false,
    name: "Roxy",
    info: "Multiple myeloma is cancer of plasma cells in the bone marrow, the cells that aren't normal reduce the level of your healthy blood cells.",
  },
  {
    src: "/img/puppy.png",
    matched: false,
    name: "Scruff",
    info: "Lyme disease, this is caused by ticks. It's around a lot during summer and spring, it's very important to check your body after you've been playing with your animals!",
  },
];
export default function GamePage() {
  const [cards, setCards] = useState([]);
  const [noTurns, setNoTurns] = useState(0);
  const [disabled, setDisable] = useState(false);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // card shuffling _>>
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setNoTurns(0);
  };

  // choice handler
  const makeChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisable(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards);
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisable(false);
  };

  // starting a new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="gamePage">
      <h2>Learn by playing!</h2>
      <button onClick={shuffleCards}>Shuffled cards</button>

      <div className="grid">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            makeChoice={makeChoice}
            disabled={disabled}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}
