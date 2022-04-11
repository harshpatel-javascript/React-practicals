import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../css/Signup.css";
import ValidationObj from "./validationSchema";
import illustration from "../images/signup.png";
import { authenticated } from "../redux/action";
import InputField from "./InputField";
import InputPhoto from "./InputPhoto";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    file: null,
    fileUrl: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div className="main-container">
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationObj}
        onSubmit={(values, actions) => {
          dispatch(authenticated(values));
          actions.resetForm(initialValues);
          navigate("/home");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="form-container">
            <InputPhoto
              name="file"
              setFieldValue={setFieldValue}
              values={values}
            />
            <InputField label="Name" name="name" type="text"></InputField>
            <InputField label="Email" name="email" type="email"></InputField>
            <InputField
              label="Phone Number"
              name="phone"
              type="number"
            ></InputField>
            <InputField
              label="Password"
              name="password"
              type="password"
            ></InputField>
            <InputField
              label="confrim Password"
              name="confirmPassword"
              type="password"
            ></InputField>
            <div className="label-name">
              <button className="submit" type="submit">
                Submit
              </button>
              <button className="reset" type="reset">
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <img src={illustration} alt="lady working on laptop" />
    </div>
  );
}

export default SignUp;
