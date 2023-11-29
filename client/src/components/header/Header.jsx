import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Path from '../../utils/paths';
import AuthContext from '../../contexts/authContext';

import "./header.css";

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    const [active, setActive] = useState("nav_menu");
    const [toogleIcon, setToogleIcon] = useState("nav_toogle");

    const onClickNavToogle = () => {
        // Animatioin of menu
        active === 'nav_menu'
            ? setActive('nav_menu nav_active')
            : setActive('nav_menu');

        // Animatioin of icon for menu
        toogleIcon == 'nav_toogle'
            ? setToogleIcon("nav_toogle toogle")
            : setToogleIcon("nav_toogle");
    };

    const onClickNavClose = () => {
        setActive('nav_menu');
        setToogleIcon("nav_toogle");
    }

    return (
        <header>
            <h1><Link className="icon-home" to={Path.Home} onClick={onClickNavClose}>CCC</Link></h1>

            <nav className={active}>
                {isAuthenticated && (
                    <div id="user">
                        <Link to={Path.Logout} onClick={onClickNavClose}>Logout</Link>
                        {/* <span>- {username}</span> */}
                    </div>
                )}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to={Path.Login} onClick={onClickNavClose}>Login</Link>
                        <Link to={Path.Register} onClick={onClickNavClose}>Register</Link>
                    </div>
                )}

                <div className='nav_item'><a href="#">tuk</a></div>
                <div className='nav_item'><a href="#">tuk</a></div>
                <div className='nav_item'><a href="#">tuk</a></div>
                <div className='nav_item'><a href="#">tuk</a></div>
            </nav>

            <div onClick={onClickNavToogle} className={toogleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </header>
    );
};