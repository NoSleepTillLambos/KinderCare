import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { LottiePlayer } from "lottie-react";
import QuestionSum from "./QuestionSum";
import Answers from "../../Components/Answers";

export default function QuestionDetails() {
  const { id } = useParams();
  const { error, document } = useDocument("questions", id);

  if (!document) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="questionDetails">
        <QuestionSum questions={document} />
      </div>
      <div className="answers">
        <Answers questions={document} />
      </div>
    </div>
  );
}
