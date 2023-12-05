import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, useFormik, Field, ErrorMessage } from 'formik';


import { loginSchema } from "../../lib/yupValidator";
import CustomInput from "../_custom-inputs/CustomInput";
import CustomCheckbox from "../_custom-inputs/CustomCheckbox";
import CustomSelect from "../_custom-inputs/CustomSelect";

import authContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../utils/paths";

import "./login.css";

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password',
// };

export default function Login() {
    const { loginSubmitHandler } = useContext(authContext);

    // const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    //     [LoginFormKeys.Email]: '',
    //     [LoginFormKeys.Password]: '',
    // });

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        loginSubmitHandler(values);

        actions.resetForm();
    };

    // return (
    //     <section className="login-page">
    //         <form id="login" onSubmit={onSubmit}>

    //             <div className="container">
    //                 <div className="brand-logo"></div>
    //                 <h1>Login</h1>

    //                 <label htmlFor="email">Email:</label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     name={LoginFormKeys.Email}
    //                     placeholder="ivan@gmail.com"
    //                     onChange={onChange}
    //                     value={values[LoginFormKeys.Email]}
    //                 />

    //                 <label htmlFor="login-pass">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="login-password"
    //                     name={LoginFormKeys.Password}
    //                     onChange={onChange}
    //                     value={values[LoginFormKeys.Password]}
    //                 />

    //                 <input type="submit" className="btn submit" value="Login" />
    //                 <p className="field">
    //                     <span>If you don't have profile click <Link to={Path.Register}>here</Link></span>
    //                 </p>
    //             </div>
    //         </form>
    //     </section>
    // );

    return (
        <section className="login-page">
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <CustomInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />

                        <button disabled={isSubmitting} type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );


    // return (
    //     <Formik
    //         initialValues={{ username: "", jobType: "", acceptedTos: false }}
    //         validationSchema={advancedSchema}
    //         onSubmit={onSubmit}
    //     >
    //         {({ isSubmitting }) => (
    //             <Form>
    //                 <CustomInput
    //                     label="Username"
    //                     name="username"
    //                     type="text"
    //                     placeholder="Enter your username"
    //                 />
    //                 <CustomSelect
    //                     label="Job Type"
    //                     name="jobType"
    //                     placeholder="Please select a job"
    //                 >
    //                     <option value="">Please select a job type</option>
    //                     <option value="developer">Developer</option>
    //                     <option value="designer">Designer</option>
    //                     <option value="manager">Product Manager</option>
    //                     <option value="other">Other</option>
    //                 </CustomSelect>
    //                 <CustomCheckbox type="checkbox" name="acceptedTos" />
    //                 <button disabled={isSubmitting} type="submit">
    //                     Submit
    //                 </button>
    //             </Form>
    //         )}
    //     </Formik>
    // );
};