import React, { useRef, useState } from "react";
import { ErrorMessage } from "formik";
import { X } from "react-feather";

function InputPhoto({ name, setFieldValue, values }) {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const reference = useRef(null);
  const changeHandler = (e) => {
    const { currentTarget } = e;
    setFieldValue("file", currentTarget.files[0]);
    setFieldValue("fileUrl", URL.createObjectURL(currentTarget.files[0]));
    setIsImageUploaded(true);
  };
  return (
    <>
      {isImageUploaded && (
        <div className="img-preview-container">
          <img src={values.fileUrl} alt="preview" className="image-preview" />
          <X
            className="close"
            onClick={() => {
              setFieldValue("file", null);
              setFieldValue("fileUrl", null);
              setIsImageUploaded(false);
            }}
          />
        </div>
      )}
      <div>
        {!isImageUploaded && (
          <p onClick={() => reference.current.click()} className="text">
            photo +
          </p>
        )}
        <input
          accept=".jpg,.png"
          ref={reference}
          onChange={(e) => changeHandler(e)}
          type="file"
          name="photo"
          id="photo"
        />
        <ErrorMessage name="file" component="div" className="error" />
      </div>
    </>
  );
}

export default InputPhoto;
