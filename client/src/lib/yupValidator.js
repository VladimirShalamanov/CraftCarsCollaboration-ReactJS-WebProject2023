import * as yup from "yup";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters long")
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service"),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    password: yup
        .string()
        .required("Required"),
});

// Examples

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    age: yup
        .number()
        .positive()
        .integer()
        .required("Required"),
    password: yup
        .string()
        .min(5)
        //   .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    jobType: yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service"),
});