import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../../Components/Forminput/Forminput";
import Button from "@mui/material/Button";
import "./authpages.scss";
import { useAuthUser} from "../../services/user.services";
import { API } from "../../utils/Api-constants";
const LoginForm = () => {
  const mutation = useAuthUser('login', API.LOGIN_API)
  return (
    <Formik
      initialValues={{
        email: "",
        password: "", // added for our checkbox
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must equal six characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const {mutate, isLoading} = mutation
        const result = mutate(values)
        console.log(result)
        if(isLoading) {
          setSubmitting(true)
        } else {
          setSubmitting(false)
        }
 
     }}    
    >
      <div className="authpage">
        <div className="authpage__description">
          <h1 className="logo">MTest</h1>
          <h1 className="text-lg">Welcome back.</h1>
          <p className="text-md">Thank you for joining us .</p>
        </div>
        <Form className="authpage__form">
          <div className="authpage__form-text">
            <h1 className="authpage__form-title">Log in</h1>
            <p className="text-md mt-sm">We are excited to have you here again</p>
            <p className="text-sm">
             Login to get access to your account, tests, and results
            </p>
          </div>

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder=""
          />

          <MyTextInput
            label="password"
            name="password"
            type="password"
            placeholder=""
            style={{
                marginTop: '10px'
            }}
          />

          <Button
            style={{
              marginTop: "1rem",
            }}
            disabled={mutation.isLoading}
            type="submit"
            size="large"
            variant="contained"
            className='mt-sm'
          >
            Log in
          </Button>
          <p className="text-md mt-sm">
            Yet to open an account? <a href="">Sign up</a>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default LoginForm;
