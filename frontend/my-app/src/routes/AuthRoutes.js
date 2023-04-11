import React from "react";
import { Route,Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuards";
import Showuser from "../test";
import Register from "../rejister";

const AuthRoutes = [
	<Route path="/home" element={<AuthGuard component={<Showuser />} />} />,
	// <Route path="/Register" element={<AuthGuard component={<Register />} />} > </Route>,
    <Route path="*" element={<Navigate to='/home' replace/>}>  </Route>
]

export default AuthRoutes;	