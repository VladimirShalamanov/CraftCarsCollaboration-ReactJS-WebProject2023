import { React, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';

import { loginSchema } from "../../lib/yupValidator";
import CustomInput from "../_custom-inputs/CustomInput";
import authContext from "../../contexts/authContext";
import Path from "../../utils/paths";

import ReactToast from "../_custom-toasts/ReactToast";
import "../register/register.css";
// import useForm from "../../hooks/useForm";

const LoFoKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const toastRef = useRef();
    const { loginSubmitHandler, isAuthenticated } = useContext(authContext);

    const onSubmit = async (values, actions) => {

        // await new Promise((resolve) => setTimeout(resolve, 3000));
        loginSubmitHandler(values);

        if (!isAuthenticated) {
            toastRef.current.showToast("Login or password don't match!");
        } else {
            actions.resetForm();
            toastRef.current.showToast("Logged in succesfully!");
        }
    };

    return (
        <section className="login-page">

            <ReactToast ref={toastRef} timeout={3000} />
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
                                id={LoFoKeys.Email}
                                type={LoFoKeys.Email}
                                name={LoFoKeys.Email}
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                label="Password"
                                id={LoFoKeys.Password}
                                type={LoFoKeys.Password}
                                name={LoFoKeys.Password}
                                autoComplete="off"
                                placeholder="Enter your password"
                            />

                            <button disabled={isSubmitting} type="submit">Login</button>
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
//                     id="login-email"
//                     type="email"
//                     name={LoFoKeys.Email}
//                     placeholder="ivan@gmail.com"
//                     onChange={onChange}
//                     value={values[LoFoKeys.Email]}
//                 />

//                 <label htmlFor="login-pass">Password:</label>
//                 <input
//                     id="login-password"
//                     type="password"
//                     name={LoFoKeys.Password}
//                     onChange={onChange}
//                     value={values[LoFoKeys.Password]}
//                 />

//                 <input type="submit" className="btn submit" value="Login" />
//                 <p className="field">
//                     <span>If you don't have profile click <Link to={Path.Register}>here</Link></span>
//                 </p>
//             </div>
//         </form>
//     </section>
// );