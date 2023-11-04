import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import React from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import SignUp from "./Pages/signup/SignUp";
import Login from "./Pages/Login/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import GamePage from "./Pages/GamePage/GamePage";
import Learning from "./Pages/Learning/Learning";
import Chat from "./Pages/chat/Chat";
import Friends from "./Components/Friends";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      {authIsReady && (
        <div className="container">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/learning"
                element={user ? <Learning /> : <Navigate to="/login" />}
              />
              <Route
                path="/chat"
                element={user ? <Chat /> : <Navigate to="/login" />}
              />
              <Route
                path="/game"
                element={user ? <GamePage /> : <Navigate to="/login" />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <SignUp />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
