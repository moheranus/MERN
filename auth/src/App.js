import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Home from './page/home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/register'element={<Register/>}/>
        </Routes>
    
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
