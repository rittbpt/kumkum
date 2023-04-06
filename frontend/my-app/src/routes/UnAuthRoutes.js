import React from "react";
import { Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuards";
import Login from "../Login";
// import Register from "../src/register";


const UnAuthRoutes = [
	<Route key="" path="/" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route key="Login" path="/Login" element={<UnAuthGuard component={<Login />} />} ></Route>,
    // <Route key="Register" path="/Register" element={<UnAuthGuard component={<Register />} />} > </Route>
]

export default UnAuthRoutes;