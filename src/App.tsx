import React from "react";
import "./App.scss";
import LoginForm from "./Pages/AuthPages/Login";
import SignupForm from "./Pages/AuthPages/Signup";
import Landingpage from "./Pages/Landingpage/Landingpage";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root-reducer";

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  return (
    <Routes>
      <Route
        path="/"
        element={ <Landingpage />}
      />
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/" /> : <LoginForm />}
      />
      <Route
        path="/signup"
        element={currentUser ? <Navigate to="/" /> : <SignupForm />}
      />
    </Routes>
  );
}

export default App;
