import React from "react";
import {useForm} from 'react-hook-form';
import '../Public/CSS/signup.css'
import { useHistory } from "react-router-dom"; 

export default function Login(){
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    alert("Login success")
    console.log(data);
    history.push("/");
  };
  console.log(errors);

  return(
    <div className="wrapper">
      <div className="form-wrapper">
      <h1 className="title">Login</h1>
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
          <div className="createAccount">
            <button type="submit">Login</button>
          </div>
          <div className="redi">
            Don't have an account? <a href="./signup"><span className ="relink">Sign up</span></a>
          </div>
        </form>
     </div>
    </div>
  )
}