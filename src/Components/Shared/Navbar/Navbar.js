import React from 'react';
import './Navbar.css';
import logo from '../../../images/letter-k.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg customize-nav">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img className='img-fluid' src={logo} width={50} alt="Khan Shop Logo" /> Khan Shop
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/products"
                        >
                            Products
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/cart"
                        >
                            Cart
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/login"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/profile"
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                            className="nav-link"
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
