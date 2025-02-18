import React from 'react';
import Add from '../img/plus_sign.png';

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">JonBai Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} width="40px" alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register