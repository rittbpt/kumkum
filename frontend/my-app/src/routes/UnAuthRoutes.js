import React from "react"; 
import { Navigate, Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuards";
import Login from "../Login";
import Register from "../rejister";
import Item_main from "../item";
import Detail from "../showdatadetial"

const UnAuthRoutes = [
	<Route  path="/" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route path="/login" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route path="/Register" element={<UnAuthGuard component={<Register />} />} > </Route>,
    <Route path="*" element={<Navigate to='login' replace/>}>  </Route>
]

export default UnAuthRoutes;