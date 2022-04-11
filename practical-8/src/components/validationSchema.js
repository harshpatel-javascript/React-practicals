import * as Yup from "yup";

const ValidationObj = () => {
  const SUPPORTED_FORMAT = ["image/jpg", "image/jpeg", "image/png"];
  return Yup.object({
    name: Yup.string()
      .required("!Required")
      .min(15, "!Name must be at least 15 characters"),
    email: Yup.string().trim().email("!Required").required("!Required"),
    phone: Yup.string()
      .required("!Phone Number is Required")
      .max(13, "Mobile No. should be 10 digit")
      .min(10, "Mobile No. should be 10 digit")
      .matches(
        /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/,
        "Only Indian Mobile number is Valid"
      ),
    password: Yup.string()
      .min(8, "!Password must be at least 8 characters")
      .required("!Required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/,
        "Must Have Uppercase, Lowercase, Number and one special character."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "!Password Must Match")
      .required("!Required"),
    file: Yup.mixed()
      .nullable()
      .required("!Required")
      .test(
        "FILE_SIZE",
        "Uploaded Photo size should lesser than 2 MB",
        (file) => !file || (file && file.size <= 2 * 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (file) => !file || (file && SUPPORTED_FORMAT.includes(file?.type))
      ),
  });
};

export default ValidationObj;
