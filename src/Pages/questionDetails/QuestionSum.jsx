import React from "react";
import "./QuestionDetails.scss";
import { useState } from "react";
import { timestamp } from "../../Firebase/firebaseConfig";
import { useAuthContext } from "../../hooks/useAuthContext";
import Icon from "../../Components/Icon";
import { useFirestore } from "../../hooks/useFirestore";
import Answers from "../../Components/Answers";

export default function QuestionSum({ questions }) {
  const { updateDocument, response } = useFirestore("questions");
  const [answer, setAnswer] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const answersToQuestions = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      answer,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(questions.id, {
      comments: [...questions.comments, answersToQuestions],
    });
    if (!response.error) {
      setAnswer("");
    }
  };
  return (
    <div>
      <div className="questionSummary">
        <h4>{questions.name}</h4>
        <p>Asked: {questions.dateAsked.toDate().toDateString()}</p>
        <h6>Asked by: {questions.askedBy.displayName}</h6>
        <Icon src={questions.askedBy.photoURL} />
      </div>
    </div>
  );
}
