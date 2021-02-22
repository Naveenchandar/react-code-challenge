import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className="brand">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                    <Link to="/rockets">Rockets</Link>
                </div>
            </div>
        </nav>
    )
}
