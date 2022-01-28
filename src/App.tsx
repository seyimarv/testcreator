import React from "react";
import "./App.scss";
import LoginForm from "./Pages/AuthPages/Login";
import SignupForm from "./Pages/AuthPages/Signup";
import Landingpage from "./Pages/Landingpage/Landingpage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root-reducer";
import ProtectedRoute from "./Components/Protectedroute/protectedroute";
import DashboardPage from "./Pages/DashboardPage/Dashboardpage";

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/Dashboard" /> : <LoginForm />}
      />
      <Route
        path="/signup"
        element={currentUser ? <Navigate to="/Dashboard" /> : <SignupForm />}
      />
      <Route path="/Dashboard" element={<ProtectedRoute />}>
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
