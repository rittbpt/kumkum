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
			}
			else { navigate(`/Login`)};
			return
        })
            .catch((err) => {
                console.log(err)
            })
	}

	return <React.Fragment>{component}</React.Fragment> 
}
export default AuthGuard