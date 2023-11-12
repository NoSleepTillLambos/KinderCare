import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import GamePage from "./Pages/GamePage/GamePage";
import Learning from "./Pages/Learning/Learning";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/chat/Chat";
import Dashboard from "./Pages/dashboard/Dashboard";
import QuestionDetails from "./Pages/questionDetails/QuestionDetails";
import SignUp from "./Pages/signup/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";

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
                path="/questions/:id"
                element={user ? <QuestionDetails /> : <Navigate to="/login" />}
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
