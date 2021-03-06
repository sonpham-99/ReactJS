import React from "react";
import {useForm} from 'react-hook-form';
import '../Public/CSS/signup.css'
import { useHistory } from "react-router-dom"; 

export default function Signup(){
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    alert("Register success")
    console.log(data);
    history.push("/login");
  };
  console.log(errors);

  return(
    <div className="wrapper">
      <div className="form-wrapper">
      <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type='text' name="username" ref={register({required:" Input username", 
                                                      minLength:{value:8, message:"Username must at least have 8 characters"}})} />
          </div>
          {errors.username ? <p className="error">{errors.username.message}</p> : null}

          <div div className="password">
            <label htmlFor="password">Password</label>
            <input type='password' name="password" ref={register({required: "Input password", 
                                                        minLength:{
                                                          value:6, 
                                                          message:"Password must at least have 6 characters",
                                                          }})} />
          </div>
          {errors.password ? <p className="error">{errors.password.message}</p> : null}

          <div div className="email">
            <label htmlFor="email">Email</label>
            <input type='text' name="email" ref={register({required: "Input email", pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
            }})} />
          </div>
          {errors.email ? <p className="error">{errors.email.message}</p> : null}

          <div className="createAccount">
            <button type="submit">Sign Up</button>
          </div>
          <div className="redi">
            Already have an account? <a href="./login"><span className ="relink">Login</span></a>
          </div>
        </form>
     </div>
    </div>
  )
}