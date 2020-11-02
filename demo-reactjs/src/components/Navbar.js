import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../Public/CSS/Navbar.css'
import Homepage from '../Views/Homepage';
import signup from '../Views/signup';
import about from '../Views/about';

class Navbar extends Component{
    render(){
        return(
            <Router>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="/Homepage">Flower shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to ="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>
                        </ul>
                    </div>
            </div>
            </nav>

            {/* <Switch>
                <Route path="/" component={Homepage}></Route>
                <Route exact path="/about"></Route>
                <Route path="/signup" component={signup}></Route>
                <Route path="/signin"></Route>
            </Switch> */}
            </Router>
        );
    }
}
export default Navbar;