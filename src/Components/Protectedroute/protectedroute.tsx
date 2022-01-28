import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RootState } from "../../redux/root-reducer";
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({Component, ...rest}: any) => {
    const currenUser = useSelector((state : RootState) => state.user.currentUser)
 return currenUser ? <Outlet /> : <Navigate to="/" />;
}
export default ProtectedRoute;
