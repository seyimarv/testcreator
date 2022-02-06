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

      <h1 style={{
        marginBottom: '4rem'
      }}>Test Settings</h1>
      <MyTextInput label="Test Title" name="Title" type="text" placeholder="" required />
      <MyTextInput
        label="Test instructions"
        name="Instructions"
        type="text"
        placeholder=""
        required
      />
      <Box className="authpage__form-flex">
        <MyTextInput
          label="Number of takes allowed"
          name="NoOfTakesAllowed"
          type="number"
          placeholder=""
          required
        />

        <MyTextInput
          label="Time Limit in Minutes"
          name="TimeLimit"
          type="number"
          placeholder=""
          required
        />
      </Box>
      <Box className="authpage__form-flex">
        <MyTextInput
          label="password"
          name="password"
          type="password"
          placeholder=""
        />
        <MyTextInput
          label="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder=""
        />
      </Box>
     
    </Box>
  );
};

export default TestSettings;
