import React from "react";
import { useState } from "react";
import { timestamp } from "../Firebase/firebaseConfig";
import { useAuthContext } from "../hooks/useAuthContext";
import Icon from "../Components/Icon";
import "./Answer.scss";
import { useFirestore } from "../hooks/useFirestore";

export default function Answers({ question }) {
  const { updateDocument, response } = useFirestore("questions");
  const [answer, setAnswer] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const answersToQuestions = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: answer,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(question.id, {
      answers: [...question.answers, answersToQuestions],
    });
    if (!response.error) {
      setAnswer("");
    }
  };
  return (
    <div className="answerTab">
      <h4>Answer this question</h4>

      <form onSubmit={handleSubmit} className="makeNotes">
        <label>
          <textarea
            className="answerTextArea"
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </label>
        <button className="btn ">Send answer!</button>
      </form>
      <div className="answersList">
        <h5>Answers</h5>
        <ul className="answerList">
          {question.answers.length > 0 &&
            question.answers.map((answer) => (
              <div className="answerCon" key={answer.id}>
                <img className="answerImg" src={answer.photoURL} />
                <p>{answer.displayName}</p>
                <h6>{answer.content}</h6>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
