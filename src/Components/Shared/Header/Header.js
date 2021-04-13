import React from 'react';

const Header = () => {
    const headerStyle = {
        color: '#11d0d9'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} aria-current="page" href="#">Home</a>
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} href="#">About</a>
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} href="#">Dental Services</a>
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} href="#">Reviews</a>
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} href="#">Blogs</a>
                        <a className="nav-link ms-5 fw-bold"  style={headerStyle} href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;