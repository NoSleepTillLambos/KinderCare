import React from "react";
import { useParams } from "react-router-dom";
import Answers from "../../Components/Answers";
import { useDocument } from "../../hooks/useDocument";
import QuestionSum from "./QuestionSum";

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
        <Answers question={document} />
      </div>
    </div>
  );
}
