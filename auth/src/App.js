
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
	return (
	
		
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
           {/* <Route path="/user" element={<Main />} /> */}
          {isLoggedIn && <Route path="/user" element={<Main />} />}{" "}
        </Routes>
      
		
	);
}

export default App;
