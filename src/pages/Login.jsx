import React from 'react'

const Login = () => {
  return (
      <div className="formContainer">
          <div className="formWrapper">
              <span className="logo">JonBai Chat</span>
              <span className="title">Login</span>
              <form action="">
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <button>Sign In</button>
              </form>
              <p>You don't have an account? Register</p>
          </div>
      </div>
    )
}

export default Login