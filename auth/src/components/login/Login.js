import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='loginContainer'>
       <form className='formContainer'>
           
         <input type="text" name="username"placeholder='Enter user name..' />
         <input type="password" name="password"placeholder="Enter password.."/>
          
         <input type="submit" value="Submit"className='loginButton' />
         <p>Not a member? <a href="login">Register</a></p>
      </form>
        
    </div>
  )
}

export default Login