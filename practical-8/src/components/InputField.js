import React from "react";
import { useField, ErrorMessage } from "formik";

const InputField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="label-name">
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <input id={field.name} autoComplete="off" {...field} {...props} />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default InputField;
