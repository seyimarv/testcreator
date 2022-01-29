import React from "react";

export type navigationItems = {
    name: string;
    path:  string;
    icon?: React.ReactNode
  };
  
  export type navigationProps = {
    itemName: string;
    path: string;
    Icon?: React.ReactNode;
  };




export interface userType {
    token: string,
    userId: string,
    userName: string,
    tests? : []
}

export interface postUserType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    tests? : [],
}

export interface loginUserType {
   email: string,
   password: string
}

