import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.scss";

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
      <div className="innerCon">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h4>Login</h4>

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
            <button className="btn lBtn" onSubmit={handleSubmit}>
              Login
            </button>
          )}
          {isPending && (
            <button className="btn" disabled onSubmit={handleSubmit}>
              Logging you in...
            </button>
          )}
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
