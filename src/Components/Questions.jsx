import React from "react";
import { Link } from "react-router-dom";
import "./Questions.scss";
import Icon from "./Icon";

export default function Questions({ questions }) {
  return (
    <div className="questions">
      {questions.length === 0 && <p>There are currently no questions</p>}
      {questions.map((questions) => (
        <div className="questionCon">
          <Link
            style={{ textDecoration: "none" }}
            to={`/questions/${questions.id}`}
            key={questions.id}
          >
            <h4>{questions.name}</h4>
            <p>Asked: {questions.dateAsked.toDate().toDateString()}</p>
            <h6>Asked by: {questions.askedBy.displayName}</h6>
            <Icon src={questions.askedBy.photoURL} />
          </Link>
        </div>
      ))}
    </div>
  );
}
