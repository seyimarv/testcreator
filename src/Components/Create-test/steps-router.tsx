import { Outlet, Route, useLocation } from "react-router-dom";
import { FormStep, FormSteps } from "./Create-test";
import "./Create-test.scss";
import { Box } from "@mui/material";

const Steps = ({ steps }: { steps: FormSteps }) => {
  const Location = useLocation()
  console.log(Location)
  return (
    <Box className="create-test-header">
      {steps.map((step, index) => {
        return (
          <div key={index} className={`create-test-header__step ${step.path === Location.pathname ? 'active' : ''}`}>
            <h1>{step.label}</h1>
          </div>
        );
      })}
    </Box>
  );
};

export const EnhancedRoute = ({
  step,
  steps,
}: {
  step: FormStep;
  steps: FormSteps;
}) => {
  const { Component } = step;
  console.log(steps);
  return (
    <>
      <Steps steps={steps} />
      <Component />
    </>
  );
};


