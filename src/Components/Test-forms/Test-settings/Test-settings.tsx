import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../../Forminput/Forminput";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const TestSettings = ({
  activeStep,
  handleNext,
  steps,
  handlePrevious,
}: {
  activeStep: number;
  handleNext: any;
  steps: string[];
  handlePrevious: () => void;
}) => {
  return (
    <Box margin="5rem 10rem">
      <h1>Test settings</h1>
    </Box>
  );
};

export default TestSettings;
