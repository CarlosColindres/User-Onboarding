import * as yup from "yup"

export default yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .min(10, "username must be 10 character"),
    email: yup
      .string()
      .email("must be a valid email address")
      .required("email is required"),
    password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 character"),
    terms: yup.boolean().oneOf([true], "You must accept the Terms of Service")
  });