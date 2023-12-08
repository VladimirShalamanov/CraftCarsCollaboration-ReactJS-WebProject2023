import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';

import { registerSchema } from "../../lib/yupValidator";
import CustomCheckbox from "../_custom-inputs/CustomCheckbox";
import CustomInput from "../_custom-inputs/CustomInput";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
// import useForm from "../../hooks/useForm";

import "./register.css";

const ReFoKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    CoPassword: 'confirmPassword',
    Checkbox: 'acceptedTos',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Path.Register]);

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        registerSubmitHandler(values);

        console.log(values);

        actions.resetForm();
    };

    // const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    //     [ReFoKeys.Email]: '',
    //     [ReFoKeys.Password]: '',
    //     [ReFoKeys.CoPassword]: '',
    // });

    return (
        <section className="register-page">
            <div className="container">
                <h1>Register</h1>

                <Formik
                    initialValues={{ email: "", username: "", password: "", confirmPassword: "", acceptedTos: false }}
                    validationSchema={registerSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <CustomInput
                                label="Email"
                                id={ReFoKeys.Email}
                                type={ReFoKeys.Email}
                                name={ReFoKeys.Email}
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                label="Username"
                                id={ReFoKeys.Username}
                                name={ReFoKeys.Username}
                                type={ReFoKeys.Username}
                                placeholder="Enter your username"
                            />
                            <CustomInput
                                label="Password"
                                id={ReFoKeys.Password}
                                type={ReFoKeys.Password}
                                name={ReFoKeys.Password}
                                autoComplete="off"
                                placeholder="Enter your password"
                            />
                            <CustomInput
                                label="Confirm Password"
                                id={ReFoKeys.CoPassword}
                                type={ReFoKeys.Password}
                                name={ReFoKeys.CoPassword}
                                autoComplete="off"
                                placeholder="Enter again your password"
                            />
                            {/* <CustomSelect
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect> */}

                            <CustomCheckbox
                                type='checkbox'
                                name={ReFoKeys.Checkbox}
                            />

                            <button disabled={isSubmitting} type="submit">Register</button>
                        </Form>
                    )}
                </Formik>

                <p className="field">If you already have profile click <Link to={Path.Login}>here</Link></p>
            </div>
        </section>
    );
};

// (
//     <section className="register-page">
//         <form id="register" onSubmit={onSubmit}>
//             <div className="container">
//                 <h1>Register</h1>

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     id="login-email"
//                     type="email"
//                     name="email"
//                     placeholder="maria@email.com"
//                     onChange={onChange}
//                     value={values[ReFoKeys.Email]}
//                 />

//                 <label htmlFor="pass">Password:</label>
//                 <input
//                     id="register-password"
//                     type="password"
//                     name="password"
//                     onChange={onChange}
//                     value={values[ReFoKeys.Password]}
//                 />

//                 <label htmlFor="con-pass">Confirm Password:</label>
//                 <input
//                     id="register-confirm-password"
//                     type="confirm-password"
//                     name="confirm-password"
//                     onChange={onChange}
//                     value={values[ReFoKeys.CoPassword]}
//                 />

//                 <input className="btn submit" type="submit" value="Register" />

//                 <p className="field">
//                     <span>If you already have profile click <Link to={Path.Login}>here</Link></span>
//                 </p>
//             </div>
//         </form>
//     </section>
// );