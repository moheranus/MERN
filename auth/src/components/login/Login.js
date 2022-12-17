import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='loginContainer'>
       <form className='formContainer'>
           
         <input type="text" name="username"placeholder='Enter user name..' />
         <input type="password" name="password"placeholder="Enter password.."/>
         <p>Forgot Password?.<a href="login"> Reset password</a></p>
         <input type="submit" value="Submit"className='loginButton' />
         <p>Not a member? <Link to="/register">Register</Link></p>
         
      </form>
        
    </div>
  )
}

export default Login