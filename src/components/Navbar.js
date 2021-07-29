import React from 'react';
import '../static/css/navbar.css'
import LoginButton from './LoginButton';
import Register from './Register';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Tezos Developers' Hub</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mr-auto">
                        <Register/>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <LoginButton/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;