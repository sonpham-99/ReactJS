import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

class Homepage extends Component{
    render(){
        return(
            <div>
               <Navbar /> 
                <div className="container">
                    <h1>Welcome</h1>
                    <p>This is where you can buy flower.This is where you can buy flower.
                    This is where you can buy flower.This is where you can buy flower.This is where you can buy flower.
                    This is where you can buy flower.This is where you can buy flower.This is where you can buy flower.
                    </p>
                    <p>This is where you can buy flower.This is where you can buy flower.
                    This is where you can buy flower.This is where you can buy flower.This is where you can buy flower.
                    This is where you can buy flower.This is where you can buy flower.This is where you can buy flower.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Homepage />, document.getElementById('root'));
export default Homepage