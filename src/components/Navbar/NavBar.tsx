import * as React from 'react';
import './navbar.scss';
import {Link} from "react-router-dom";

export const NavBar: React.FC = () => {
    return (
        <div className={'Navbar'}>
            <div className={'nav_underlay'}></div>
            <div className={'link_container'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </div>
        </div>
    )
};
