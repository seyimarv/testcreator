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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogBox from "./Components/dialog-box/dialog-box";
import {
  CreateTest,
  FormStep,
  stepsComposer,
} from "./Components/Create-test/Create-test";
import  {
   EnhancedRoute
} from "./Components/Create-test/steps-router";

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DialogBox />
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Navigate to="/Create-test" /> : <Landingpage />
          }
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/Dashboard" /> : <LoginForm />}
        />
        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/Dashboard" /> : <SignupForm />}
        />
        <Route path="/Create-test" element={<ProtectedRoute />}>
          <Route path="/Create-test" element={<CreateTest />}>
            {stepsComposer().map((step: FormStep, index: number) => (
              <Route
                path={step.path}
                key={index}
                element={<EnhancedRoute step={step} steps={stepsComposer()} />}
              />
            ))}
            <Route index element={<Navigate to={`/Create-test/add-info`} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
