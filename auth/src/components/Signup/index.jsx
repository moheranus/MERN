import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Signup = () => {
	const history = useNavigate();
	const [inputs, setInputs] = useState({
		name:"",
		email:"",
		password:"",


	});
	const handleChange = (e)=>{
		setInputs((prev)=>({
			...prev,
			[e.target.name]:e.target.value,

		}));
	};
	const sendRequest = async () =>{
		const res = await axios
		 .post("http://localhost:7000/api/signup",{
			name: inputs.name,
			
			email: inputs.email,
			password: inputs.password,
		 })	
		 .catch((err)=>console.log(err));
		 const data = await res.data;
		 return data;
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		// console.log(inputs);
		//send http request
		sendRequest().then(()=>history("/login"))	
	}

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User name"
							name="name"
							onChange={handleChange}
							// value={data.fname}
							required
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							// value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							// value={data.password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;