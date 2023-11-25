import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './utils/paths';

import Header from "./components/header/Header";

import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

export default function App() {
    return (
        <AuthProvider>
            <div id="child-box">
                
                <Header />

                <Routes>
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.Register} element={<Register />} />
                </Routes>
            </div>
        </AuthProvider>
    );
};