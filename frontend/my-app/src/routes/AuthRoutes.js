import React from "react";
import { Route,Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuards";
import Showuser from "../test";
import Register from "../rejister";
import Item_main from "../item";
import Sidebar from "../Sidebar";
import Additem from "../Additem";


const AuthRoutes = [
	<Route path="/home" element={<AuthGuard component={<Showuser />} />} />,
	<Route path="/item" element={<AuthGuard component={<Item_main/>} />} />,
	<Route path="/Additem" element={<AuthGuard component={<Additem/>} />} />,
	<Route path="/Sidebar" element={<AuthGuard component={<Sidebar/>} />} />,
	<Route path="**" element={<Navigate to='/home' replace/>} />

];

// console.log("AuthRoutes", AuthRoutes);

export default AuthRoutes;	