import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Alertt from './Alert';

const register_api = 'http://localhost:8080/register'

function Register() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [first_name, setfirst_name] = React.useState('')
    const [last_name, setlast_name] = React.useState('')
    const [ch, setCh] = React.useState(0)
	const [showAlert, setShowAlert] = React.useState(false);

    const navigate = useNavigate();
    const Registerdata = () => {
        axios.post(register_api, {
            username: username,
            password: password,
            permisstion: "user",
            first_name: first_name,
            last_name: last_name
        }).then((res) => {
            if (res.data.ch == 1) {
                setCh(4)
				setShowAlert(true)
                setTimeout(() => {
					setShowAlert(false);
				}, 3000);
                return
            }
            if (res.data.ch == 2) {
                setCh(5)
				setShowAlert(true)
                setTimeout(() => {
					setShowAlert(false);
				}, 3000);
                return
            }
            if (res.data.ch == 3) {
                setCh(6)
				setShowAlert(true)
                setTimeout(() => {
					setShowAlert(false);
				}, 3000);
                setInterval(() => {
					window.location.href = '/Login'
				}, 1500)
                return
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {showAlert && (Alertt(ch))}
            <div className="login-container">
                <h1>WELCOME</h1>
                <h2>Register</h2>
                <form>
                    <label htmlFor="Inputfistname">firstname</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter firstname"
                        onChange={e => setfirst_name(e.target.value)}
                    />
                    <label htmlFor="Inputlastname">lastname</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter lastname"
                        onChange={e => setlast_name(e.target.value)}
                    />
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
                <button onClick={e => Registerdata()} type="submit" className="btn btn-primary">
                    Next
                </button>
            </div>
        </>
    );
}

export default Register;