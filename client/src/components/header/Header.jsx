import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Path from '../../utils/paths';
import AuthContext from '../../contexts/authContext';

import logo from "../../assets/general-img/logo-ccc.png";
import "./header.css";

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    const [menu, setMenu] = useState("nav_menu");
    const [toogleIcon, setToogleIcon] = useState("nav_toogle");
    const [backdrop, setBackdrop] = useState("backdrop");

    const onClickNavToogle = () => {
        // Animatioin of menu
        menu === 'nav_menu'
            ? setMenu('nav_menu nav_active')
            : setMenu('nav_menu');

        // Animatioin of icon for menu
        toogleIcon === 'nav_toogle'
            ? setToogleIcon("nav_toogle toogle")
            : setToogleIcon("nav_toogle");

        // Animatioin of backdrop
        backdrop === 'backdrop'
            ? setBackdrop('backdrop backdrop_active')
            : setBackdrop('backdrop');
    };

    const onClickNavClose = () => {
        setMenu('nav_menu');
        setToogleIcon("nav_toogle");
        setBackdrop('backdrop');
    };

    return (
        <header>
            <h1><Link className="icon-home" to={Path.Home} onClick={onClickNavClose}><img src={logo} /></Link></h1>

            <div className={backdrop} onClick={onClickNavClose}></div>

            <nav className={menu}>
                <Link to={Path.CarList} onClick={onClickNavClose}>Models</Link>
                <Link to={Path.PostList} onClick={onClickNavClose}>Posts</Link>
                <Link to={Path.AboutUs} onClick={onClickNavClose}>About Us</Link>

                {isAuthenticated && (
                    <div className="user">
                        <Link to={Path.MyProfile} onClick={onClickNavClose}>My Profile</Link>
                        <Link to={Path.Logout} onClick={onClickNavClose}>Logout</Link>
                        <span>- {username}</span>
                    </div>
                )}
                {!isAuthenticated &&
                    <div className="guest">
                        <Link to={Path.Login} onClick={onClickNavClose}>Login</Link>
                        <Link to={Path.Register} onClick={onClickNavClose}>Register</Link>
                    </div>
                }
            </nav>

            <div onClick={onClickNavToogle} className={toogleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </header>
    );
};