import React from 'react';
import "./Register.css";
// import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='registerContainer'>
        <form className='registerForm'>
               <input type="text"name='username'placeholder='Enter user name'/>
               <input type="email"name="email"placeholder="Enter your email"/>
               <input type="password"name="password"placeholder="Create password"/>
               <input type="password"name='password'placeholder="Confirm password"/>
               <input type='submit'value='submit'className='registerButton'/>
               <p>Already have an account<a href="login">Login now</a></p>
               <p>Forgot Password<a href="login">Reset password</a></p>
        </form>


    </div>
  )
}

export default Register