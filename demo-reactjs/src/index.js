import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Register from './components/Register';
import Homepage from './Views/Homepage';
// import About from './Views/About';
// import signup from './Views/signup'

class index extends Component{
    render(){
        return(
            <Homepage />
        );
    }
}