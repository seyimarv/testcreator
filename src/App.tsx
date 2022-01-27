import React from "react";
import "./App.scss";
import LoginForm from "./Pages/AuthPages/Login";
import SignupForm from "./Pages/AuthPages/Signup";
import Landingpage from "./Pages/Landingpage/Landingpage";

function App() {
  return (
    <>
      <SignupForm />
      <LoginForm />
    </>
  );
}

export default App;
