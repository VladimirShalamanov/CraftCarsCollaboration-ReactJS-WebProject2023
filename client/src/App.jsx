import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import { AuthProvider } from './contexts/authContext';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Path from './utils/paths';

import PageNotFound from './components/error-pages/PageNotFound';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import MyProfile from './components/my-profile/MyProfile';

import Header from './components/header/Header';
import AboutUs from './components/about-us/AboutUs';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import CarList from './components/car-list/CarList';
import PostList from './components/post-list/PostList';
import PostDetails from './components/post-details/PostDetails';
import PostCreate from './components/post-create/PostCreate';
import PostEdit from './components/post-edit/PostEdit';

import "./App.css";

export default function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="child-box">

                    <Header />

                    <main>
                        <Routes>
                            <Route path={Path.Header} element={<Header />} />
                            <Route path={Path.AboutUs} element={<AboutUs />} />
                            <Route path={Path.Home} element={<Home />} />

                            <Route path={Path.CarList} element={<CarList />} />

                            <Route path={Path.PostList} element={<PostList />} />
                            <Route path={Path.PostDetails} element={<PostDetails />} />

                            <Route element={<AuthGuard />} >
                                <Route path={Path.MyProfile} element={<MyProfile />} />
                                <Route path={Path.Logout} element={<Logout />} />

                                <Route path={Path.PostCreate} element={<PostCreate />} />
                                <Route path={Path.PostEdit} element={<PostEdit />} />
                            </Route>

                            <Route element={<GuestGuard />} >
                                <Route path={Path.Login} element={<Login />} />
                                <Route path={Path.Register} element={<Register />} />
                            </Route>

                            <Route path={Path.PageNotFound} element={<PageNotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
};