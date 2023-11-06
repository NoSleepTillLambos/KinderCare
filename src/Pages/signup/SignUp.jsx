import "./SignUp.scss";
import { useSignup } from "../../hooks/useSignup";

import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signup, isPending, error } = useSignup();
  // kid icon avatar
  const [icon, setIcon] = useState(null);
  const [iconError, setIconError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //make sure evertthing is in order
    signup(email, password, username, icon);
  };

  const handleFile = (e) => {
    setIcon(null);

    // check selected files
    var selectedItem = e.target.files[0];
    console.log(selectedItem);

    // check for type property and make sure size
    if (!selectedItem) {
      setIconError("Hey!, Please choose an image for yourself!");
      return;
    }
    if (!selectedItem.type.includes("image")) {
      setIconError("The file has to be an image file!");
      return;
    }
    if (selectedItem.size > 100000) {
      setIconError("Image is too large");
      return;
    }

    setIconError(null);
    setIcon(selectedItem);
  };
  return (
    <div className="signupCon">
      <div className="innerCon">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h4>Sign up</h4>

          <label>
            <span>Email:</span>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <span>Username:</span>
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            <span>Icon:</span>
            <input type="file" required onChange={handleFile} />
            {iconError && <div className="error">{iconError}</div>}
          </label>
          {!isPending && (
            <button className="btn sBtn" onSubmit={handleSubmit}>
              Sign Up
            </button>
          )}
          {isPending && (
            <button className="btn" disabled onSubmit={handleSubmit}>
              Loading
            </button>
          )}
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
