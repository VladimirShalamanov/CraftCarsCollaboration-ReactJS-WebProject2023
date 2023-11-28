import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import { AuthProvider } from './contexts/authContext';
import AuthGuard from './components/guards/AuthGuard';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Path from './utils/paths';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

export default function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="child-box">

                    <Header />

                    <main>
                        <Routes>
                            <Route path={Path.Header} element={<Header />} />
                            <Route path={Path.Home} element={<Home />} />

                            <Route path={Path.Login} element={<Login />} />
                            <Route path={Path.Register} element={<Register />} />

                            <Route element={<AuthGuard />} >
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
};