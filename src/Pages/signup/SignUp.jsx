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

  const handleFile = (e) => {
    setIcon(null);
    var selectedItem = e.target.files;
  };
  return (
    <div className="auth-form">
      <h2>Sign up</h2>
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
      </label>
      <button className="btn">Sign Up!</button>
    </div>
  );
}
