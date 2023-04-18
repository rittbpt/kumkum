import * as React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Alertt from './Alert';

const login_api = 'http://localhost:8080/login'


function Login() {
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [showAlert, setShowAlert] = React.useState(false);
	const [ch, setCh] = React.useState(0)
	const navigate = useNavigate();

	const handleRegister = () => { 
		window.location.href = '/Register' 
	};
	const logindata = (e) => {
		e.preventDefault()
		axios.post(login_api, {
			username: username,
			password: password
		}).then((res) => {
			if (res.data.ch == 2) {
				localStorage.setItem('token', res.data.token)
				setCh(1)
				setShowAlert(true);
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
				setInterval(() => {
					window.location.href = '/home'
				}, 1000)
				return
			}
			if (res.data.ch == 1) {
				setCh(2)
				setShowAlert(true);
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
				return

			}
			if (res.data.ch == 3) {
				setCh(3)
				setShowAlert(true);
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
			}
		})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<div>
				{showAlert && (Alertt(ch))}
			</div>
			<div className="login-container">
				<h1>WELCOME</h1>
				<h2>Login</h2>
				<form>
					<label htmlFor="InputUsername">Username</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter username"
						onChange={e => setUsername(e.target.value)}
					/>
					<label htmlFor="Inputpassword">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Enter password"
						onChange={e => setPassword(e.target.value)}
					/>
				</form>
				<button onClick={e => logindata(e)} type="submit" className="btn btn-primary">
					Next
				</button>
				<div>
					<h3>Don't have an account?</h3>
					<button onClick={handleRegister}>Register</button>
				</div>
			</div>
		</>
	);
}

export default Login;
