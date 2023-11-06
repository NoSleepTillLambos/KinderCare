import React from "react";
import { useState } from "react";
import { timestamp } from "../Firebase/firebaseConfig";
import { useAuthContext } from "../hooks/useAuthContext";
import Icon from "../Components/Icon";
import "./Answer.scss";
import { useFirestore } from "../hooks/useFirestore";

export default function Answers({ questions }) {
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
      notes: [...questions.notes, answersToQuestions],
    });
    if (!response.error) {
      setAnswer("");
    }
  };
  return (
    <div>
      <h4>Answer this question</h4>

      <form onSubmit={handleSubmit} className="makeNotes">
        <label>
          <textarea
            className="answerTextArea"
            required
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </label>
        <button className="btn ">Send answer!</button>
      </form>
    </div>
  );
}
