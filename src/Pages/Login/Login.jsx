import "./Login.scss";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="loginCon">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        {!isPending && (
          <button className="btn" onSubmit={handleSubmit}>
            Login
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
  );
}
