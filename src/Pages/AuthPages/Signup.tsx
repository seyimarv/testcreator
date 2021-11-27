import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../../Components/Forminput/Forminput";
import Button from "@mui/material/Button";
import "./authpages.scss";
const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "", // added for our checkbox
        confirmPassword: "", // added for our select
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must equal six characters")
          .required("Required"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="authpage">
        <div className="authpage__description">
            <h1 className='logo'>MTest</h1>
            <h1 className="text-lg">Welcome.</h1>
            <p className="text-md">Thank You for deciding to join us.</p>
        </div>
        <Form className="authpage__form">
            <div className="authpage__form-text">
          <h1 className="authpage__form-title">Register</h1>
          <p className="text-md mt-sm">Become an MTest member for free</p>
          <p className="text-sm">
            Create your account to unlock all the great features of Mtest.
            get access to unlimited tests, questions, and results. 
          </p>
          </div>
          <div className="authpage__form-flex">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder=""
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder=""
            />
          </div>

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder=""
          />
          <div className="authpage__form-flex">
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
          </div>

          <Button style={{
              marginTop: '1rem'
          }}
          type='submit'
          size="large" variant="contained">
            Create Account
          </Button>
          <p className="text-md mt-sm">
            Already have an account? <a href="">Log in</a>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default SignupForm;
