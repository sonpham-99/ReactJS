import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../Public/CSS/signup.css'

 const FormInput = () =>{
    // const[username, setUsername] = useState("");
    // const[password, setPassword] = useState("");

    const[user, setUser] = useState({username : "",
                                     password: ""});
    const onChangeUser = (e) => {
        setUser({...user,[e.target.name] : e.target.value});
    } 
    const onSubmit= (e) => {
        e.preventDefault();
        console.log(user);
            ReactDOM.render(
                <div>
                    <div>
                        User:{user.username}
                    </div>
                    <div>
                        Password:{user.password}
                    </div>
                </div>
                ,document.getElementById('signup')
            )
        }
    return(
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="title">Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                                value={user.username}
                                name="username"
                                onChange={onChangeUser} />
                </div>
                <div div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                                value={user.password}
                                name="password"
                                onChange={onChangeUser} />
                </div>
                <div className="createAccount">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default FormInput