import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../Public/CSS/Navbar.css'
import signup from './signup';
import About from './About';

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
                            <Link to="/about" className='nav-link'>About</Link>
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
            
            <Route path="/about" component={About} />
            </Router>
        );
    }
}
export default Navbar;

// export default class Navbar extends Component{
//     render(){
//         return(
//             <Router>
//                 <div className="topnav">
//                     <Link to="/about">About</Link>
//                     <Link to="/signup">Sign up</Link>
//                     <Link to="/signin">Sign in</Link>
//                 </div>
//             </Router>
//         )
//     }
// }