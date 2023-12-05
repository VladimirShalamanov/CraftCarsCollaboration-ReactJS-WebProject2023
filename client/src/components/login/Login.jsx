import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';

import { loginSchema } from "../../lib/yupValidator";
import CustomInput from "../_custom-inputs/CustomInput";
import authContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../utils/paths";

import "./login.css";

const LoFoKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(authContext);

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        loginSubmitHandler(values);

        actions.resetForm();
    };

    return (
        <section className="login-page">
            <div className="container">
                <h1>Login</h1>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <CustomInput
                                label="Email"
                                id="login-email"
                                type={LoFoKeys.Email}
                                name={LoFoKeys.Email}
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                label="Password"
                                id="login-password"
                                type={LoFoKeys.Password}
                                name={LoFoKeys.Password}
                                placeholder="Enter your password"
                            />

                            <button disabled={isSubmitting} type="submit">
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="field">If you don't have profile click <Link to={Path.Register}>here</Link></p>
            </div>
        </section>
    );
};

// (
//     <section className="login-page">
//         <form id="login" onSubmit={onSubmit}>

//             <div className="container">
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