import React, { useState } from "react";
import TestSettings from "../Test-forms/Test-settings/Test-settings";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import AddQuestion from "../Test-forms/Test-questions/Add-Question";
import { Box, Typography } from "@mui/material";
import { LogoText } from "../Header/Header";

const CreateTestHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      margin="2rem 3rem"
    >
      <LogoText />
      <Box margin="1rem 0rem">
        <h1>Create a Test</h1>
      </Box>

      <Box display="flex" padding="1rem 0rem">
        <Button
          size="large"
          color="success"
          variant="outlined"
          sx={{
            margin: "0rem 2rem",
          }}
        >
          Save as draft
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const CreateTest: React.FC = () => {
  const steps = ["Test settings", "Add questions"];
  const [activeStep, setActiveStep] = useState(0);
  const [test, setTest] = useState({
    testSettings: null,
    testQuestions: [],
  });

  const handleNext = (errors: any) => {
    
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      <Formik
        initialValues={{
          Title: "",
          Instructions: "",
          NoOfTakesAllowed: 100,
          TimeLimit: 0,
          password: "",
          confirmPassword: "",
          Questions: [],
          Privacy: false,
        }}
        validationSchema={Yup.object({
          Title: Yup.string().required("What is the title of the test?"),
          Instructions: Yup.string().required(
            "Please include some instructions for the test"
          ),
          NoOfTakesAllowed: Yup.number()
            .typeError("you must specify a number")
            .min(1, "The minimum number of takes allowed is 1")
            .required("How many times can a user take the test?"),
          TimeLimit: Yup.number()
            .typeError("you must specify a number")
            .min(1, "The minimum time limit is 10 minutes")
            .required("What is the time limit for the test"),
          Private: Yup.boolean().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {

        }}
        render={({ values, errors }) => (
          <Form>
            <CreateTestHeader />
            <Box className=''>
              {steps.map((item, index) => {
                return (
                  <div>
                    {" "}
                    {index + 1} {item}{" "}
                  </div>
                );
              })}
            </Box>
           
            <TestSettings
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
              handlePrevious={handlePrevious}
            />
          </Form>
        )}
      />
      <Box display="flex" justifyContent="center">
        <Button
          type="submit"
          size="large"
          disabled={activeStep === 0}
          variant="contained"
          onClick={handlePrevious}
          sx={{
            margin: "0rem 1rem",
          }}
        >
          back
        </Button>
     
        <Button
          type="submit"
          size="large"
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default CreateTest;
