import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import '../Public/CSS/signup.css'

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
    }
    return(
        <form onSubmit={onSubmit}>
            <h1>Username is: {user.username}</h1>
            <input type="text"
                        value={user.username}
                        name="username"
                         onChange={onChangeUser} />
            <h1>Password is: {user.password}</h1>
            <input type="password"
                        value={user.password}
                        name="password"
                        onChange={onChangeUser} />
                        <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default FormInput
ReactDOM.render(<FormInput />, document.getElementById('root'));