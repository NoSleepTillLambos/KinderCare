import React from "react";
import { useState } from "react";
import { timestamp } from "../Firebase/firebaseConfig";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Notes() {
  const [note, setNote] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addNote = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: note,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(addNote);
  };
  return (
    <div className="notes">
      <h3>Notes</h3>

      <form onSubmit={handleSubmit} className="makeNotes">
        <label>
          <h5>Make note</h5>
          <textarea
            required
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </label>
        <button style={{ borderRadius: " 10px" }} className="btn noteBtn">
          Make note
        </button>
      </form>
    </div>
  );
}
