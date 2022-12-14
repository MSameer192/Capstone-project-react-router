import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Navbar() {


    
    const navigate = useNavigate();

    const goToPrice = () => {
        navigate('/pricing')
    }


    
    function goToTop() {
        window.scroll(0,0);
    }

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
                            <Link className="nav-link active fw-bold me-3" aria-current="page" to="/" onClick={goToTop}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/services" onClick={goToTop}>SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/features" onClick={goToTop}>FEATURE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/pricing" onClick={goToTop}>PRICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold me-3" to="/quesans" onClick={goToTop}>FAQ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active  fw-bold" to="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                MAIN PAGE
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action1</Link></li>
                                <li><button className="dropdown-item" onClick={goToPrice} >Go to Pricing</button></li>
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
