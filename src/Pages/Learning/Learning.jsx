import React, { useState } from "react";
import "./Learning.scss";
import Select from "react-select";
import { useAuthContext } from "../../hooks/useAuthContext";
import Friends from "../../Components/Friends";
import { timestamp } from "../../Firebase/firebaseConfig";

const categories = [
  { value: "prevention", label: "Prevention" },
  { value: "preparation", label: "Preparation" },
  { value: "symptoms", label: "Symptoms" },
  { value: "guidance", label: "Guidance" },
];

export default function Learning() {
  const { user } = useAuthContext();
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const [category, setCategory] = useState("");
  const [selectError, setSelectError] = useState(null);
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSelectError(null);

    if (!category) {
      setSelectError("Please select a category");
      return;
    }

    const askedBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.id,
    };
    const questions = {
      name,
      details,
      category: category.value,
      dateAsked: timestamp.fromDate(Date.now),
      notes: [],
      askedBy,
    };
    console.log(name, details, category);
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="learningCon">
      <div className="leftDiv">
        <button onClick={toggleModal} className="btn questionBtn">
          Ask Question
        </button>
        {modal && (
          <div className="create-form modal overlay">
            <form onSubmit={handleSubmit} className="modal-content">
              <h4 className="page-title">Ask a question!</h4>
              <label>
                <span>Question Title:</span>
                <input
                  placeholder="What is chemotherapy?"
                  required
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label>
                <span>Question:</span>
                <textarea
                  placeholder="What can I expect when i start my chemo?"
                  required
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                ></textarea>
              </label>

              <label>
                <span>Question category:</span>
                <Select
                  onChange={(option) => setCategory(option)}
                  options={categories}
                />
              </label>
              {selectError && <p className="error">{selectError}</p>}
              <button className="btn">Ask Question</button>
              <button className="btn" onClick={toggleModal}>
                Close
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="rightDiv">
        <Friends />
      </div>
    </div>
  );
}
