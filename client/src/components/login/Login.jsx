import { useContext } from "react";
import { Link } from "react-router-dom";

import Path from "../../utils/paths"; 
import useForm from "../../hooks/useForm";
import authContext from "../../contexts/authContext";

import "./login.css";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(authContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        // <section id="login-page" className="auth">
        <section className="login-page">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        placeholder="ivan@gmail.com"
                        onChange={onChange}
                        value={values[LoginFormKeys.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        onChange={onChange}
                        value={values[LoginFormKeys.Password]}
                    />

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to={Path.Register}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};