import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Public/CSS/Navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">Flower shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to ="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Log In</Link>
                        </li>
                        </ul>
                    </div>
            </div>
            </nav>
        );
    }
}