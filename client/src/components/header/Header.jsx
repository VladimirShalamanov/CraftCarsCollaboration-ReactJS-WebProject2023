import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Path from '../../utils/paths';
import AuthContext from '../../contexts/authContext';
import "./header.css";

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to={Path.Home}>CCC</Link></h1>
            
            <nav>
                {isAuthenticated && (
                    <div id="user">
                        <Link to={Path.Logout}>Logout</Link>
                        <span>- {username}</span>
                    </div>
                )}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to={Path.Login}>Login</Link>
                        <Link to={Path.Register}>Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};