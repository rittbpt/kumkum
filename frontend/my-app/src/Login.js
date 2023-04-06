import axios from 'axios'
import React from 'react'


function Login() {
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [showRegister, setShowRegister] = React.useState(false);

	const handleRegister = () => { window.location.href = "/Register" };
	const logindata = () => {
		axios.post('http://localhost:8000/login', {
			username: username,
			password: password
		}).then((res) => {
			console.log(res.data)
			if (res.data.check == 2) {
				localStorage.setItem('token',res.data.token)
				alert("login success")
				window.location.href = "/Test"
				return
			}
			else if(res.data.check == 1){
				alert("please fill the blank")
				return
			}
			alert("login failed")

				
		})
		.catch((err) => {
			console.log(err)
		})
	}
	return (
		<h1>
			WELCOME
			<h6>
				Login
			</h6>
			<form>
				<label for="InputUsername">username</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter username"
					onChange={e => setUsername(e.target.value)}
				/>
				<label for="Inputpassword">password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Enter password"
					onChange={e => setPassword(e.target.value)}
				/>
			</form>
			<button onClick={e => logindata()} type="submit" className="btn btn-primary">
				Next
			</button>
			<div>
				<h6>Do u not have accout?</h6>
				<button onClick={handleRegister}>Register</button>
			</div>
		</h1>


	);
}

export default Login;