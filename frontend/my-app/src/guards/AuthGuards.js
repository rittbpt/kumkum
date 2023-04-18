import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const checkToken_api = 'http://localhost:8080/check'

const AuthGuard = ({ component }) => {
	// const [status, setStatus] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		checkToken();
	}, [component]);
	const checkToken = async () => {
		axios.post(checkToken_api, {
            token: localStorage.getItem('token')
        }).then((res) => {
            if (res.data.chk == true) {
				// console.log(component);
				// setStatus(true);
			}
			else { navigate(`/Login`)};
            // setStatus(true);
			// console.log(component);
			// console.log(res.data.chk)
			// console.log("1")
			return
        })
            .catch((err) => {
                console.log(err)
            })
		// try {
		// 	let token = await localStorage.getItem('token');
			
		// 	console.log(token.data.username)
		// 	if (token === null) {
		// 		navigate(`/Login`);
		// 	}
		// 	setStatus(true);
		// 	return;
		// } catch (error) {
		// 	navigate(`/Login`);
		// }
	}

	return <React.Fragment>{component}</React.Fragment> 
}
export default AuthGuard