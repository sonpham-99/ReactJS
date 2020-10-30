import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Public/CSS/Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="/Homepage">Flower shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign In</a>
                        </li>
                        </ul>
                    </div>
            </div>
            </nav>
        );
    }
}
export default Navbar;