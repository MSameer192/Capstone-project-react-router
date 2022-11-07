import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg bg-white" id="navbar-main-container">

            <div className="container scroller" id="navbar-container">
                <Link className="navbar-brand  fw-bold text-dark" to="/">
                    <img src="./images/logo2.jpg" alt="Logo" className="d-inline-block align-text-top pe-2" />Apps</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/services">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/features">FEATURE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/pricing">PRICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/quesans">FAQ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active  fw-bold" to="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                MAIN PAGE
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action1</Link></li>
                                <li><Link className="dropdown-item" to="/">Another2</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}