import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../Public/CSS/Register.css'

 const formValid = formErrors => {
     let valid = true;

     Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
     return valid;
 }

class Register extends Component{
    constructor(props){
    super(props);

    this.state = {
        username: null,
        password: null,
        email: null,
        formErrors: {
            username: "",
            password: "",
            email: "",
          }
      };
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log('\
            username: this.state.username\
            password: this.state.password\
            email: this.state.email\
            ')
        } else {
            console.log('Form Invalid')
        }
    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case 'username':
                formErrors.username = value.length < 6 && value.length > 0 ? 'Atleast 6 characters required' : "";
                break;
            case 'password':
                formErrors.password = value.length < 6 && value.length > 0 ? 'Atleast 6 characters required' : "";
                break;
            case 'email':
                formErrors.email = value.length < 6 && value.length > 0 ? 'Atleast 6 characters required' : "";
                break;
        }
        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };

    render(){
        const{ formErrors } = this.state;

        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>REGISTER</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                className={formErrors.username.length > 0 ? "error" : null} 
                                placeholder="username" 
                                name="username" 
                                noValidate 
                                onChange={this.handleChange}
                                />
                                {formErrors.username.length > 0 && (
                                    <span className="errMe">{formErrors.username}</span>
                                )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className={formErrors.password.length > 0 ? "error" : null} 
                                placeholder="password" 
                                name="password" 
                                noValidate 
                                onChange={this.handleChange}
                                />
                                {formErrors.password.length > 0 && (
                                    <span className="errMe">{formErrors.username}</span>
                                )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className={formErrors.email.length > 0 ? "error" : null}  
                                placeholder="email" 
                                name="email" 
                                noValidate 
                                onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0 && (
                                    <span className="errMe">{formErrors.username}</span>
                                )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already have an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Register />, document.getElementById('root'));
export default Register