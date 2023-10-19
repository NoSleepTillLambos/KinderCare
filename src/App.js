import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import React from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import SignUp from "./Pages/signup/SignUp";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
