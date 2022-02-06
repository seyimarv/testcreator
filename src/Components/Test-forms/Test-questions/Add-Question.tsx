import React from "react";
import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../../Forminput/Forminput";
import * as Yup from "yup";
import { Button } from "@mui/material";

const AddQuestion = ({ index, arrayHelpers }: any) => {
  return (
    <Formik
      initialValues={{
         Question: "",
         Options: [], // added for our checkbox
      }}
      validationSchema={Yup.object({
        Question: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "Password must equal six characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        arrayHelpers.insert(index, values);
        setSubmitting(false)
      }}
    >
      <div className="Each-question">
        <Form className="authpage__form">
           <h1>Add question</h1>
          <MyTextInput
            label="Question title"
            name="Question"
            type="email"
            placeholder=""
          />

          <MyTextInput
            label="password"
            name="password"
            type="password"
            placeholder=""
            style={{
              marginTop: "10px",
            }}
          />

          <Button
            style={{
              marginTop: "1rem",
            }}
            type="submit"
            size="large"
            variant="contained"
            className="mt-sm"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Formik>
  );
};

export default AddQuestion;
