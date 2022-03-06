import React, { useState } from "react";
import TestSettings from "../Test-forms/Test-settings/Test-settings";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import AddQuestion from "../Test-forms/Test-questions/Add-Question";

import { LogoText } from "../Header/Header";
import { Outlet } from "react-router-dom";

export type FormStep = {
  path: string;
  Component: any;
  label: string;
};

export type FormSteps = FormStep[];

export const stepsComposer = () => {
  const url = "/Create-test";

  return [
    {
      path: `${url}/add-info`,
      Component: TestSettings,
      label: "Details",
    },
    {
      path: `${url}/add-questions`,
      Component: AddQuestion,
      label: "Questions",
    },
    {
      path: `${url}/add-settings`,
      Component: TestSettings,
      label: "Settings",
    },
  ];
};

export const CreateTest = () => {
  const initialQuestionValues = {
    Title: "",
    Questions: [],
    TimeLimit: 100,
    NoOfTries: 100,
  };
  return (
    <Formik initialValues={initialQuestionValues} onSubmit={() => {

    }}>
      <Outlet />
    </Formik>
  );
};
