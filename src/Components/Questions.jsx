import React from "react";
import { useCollection } from "../hooks/useCollection";

export default function Questions({ questions }) {
  const { isPending, error, documents } = useCollection("questions");
  return (
    <div>
      {questions.length === 0 && <p>There are currently no questions</p>}
      {questions.map((questions) => (
        <div key={questions.id}>{questions.name}</div>
      ))}
    </div>
  );
}
