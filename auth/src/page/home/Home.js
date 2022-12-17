import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import sectionLogo from '../../asset/section1.jpg'
const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='homeHeader'>
            <div className='logo'>
                <p>Daniel</p>
            </div>
            <div className='headerBtn'>
                <button>Login</button>
            </div>

        </div>
        <div className='homeSection'>
            <div className='leftSection'>
                <h1>Expertize MERN Stack</h1>
                <p>This poject contains all basic knowledge that MERN stack engineer should have.</p>
                <p>In this project we implement User registration,
                    user login, password reset, social login,
                    user authorization, email notification and
                    all other things that fullstak webdeveloper should have.
                </p>
                <div className='buttons'>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register">Register</Link></button>
                </div>
            </div>
            <div className='rightSection'>
                   <img src={sectionLogo} />
            </div>
        </div>
    </div>
  )
}

export default Home