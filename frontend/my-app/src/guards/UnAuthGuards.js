import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuthGuard = ({ component }) => {
	const [status, setStatus] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		checkToken();
	}, [component]);

	const checkToken = async () => {
		try {
			let user = await localStorage.getItem('token');
			if (!user) {
				
			} else {
				navigate(`/login`);
			}
			setStatus(true);
		} catch (error) {
			navigate(`/login`);
		}
	}

	return status ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
}

export default UnAuthGuard;