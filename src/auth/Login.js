/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React, { useState, useRef, useContext } from "react";
import logo from "./../sangwin-logo.png"

import './Login.css'
import AuthContext from "./auth-context";
import { Navigate } from "react-router-dom";


function Login() {

	const authCtx = useContext(AuthContext)

	const [isSubmitted, setIsSubmitted] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (emailRef.current.value !== 'admin@yopmail.com' || passwordRef.current.value !== 'admin123') {
			alert('Invalid email or password')
		} else {
			setIsSubmitted(true)
			authCtx.login(emailRef.current.value, passwordRef.current.value)
		}
	}

	if (authCtx.isLoggedIn === true) {
		return <Navigate to="/" />;
	}


	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<div className="w3-container align-center w3-card login-card">
				<form onSubmit={handleSubmit}>
					<div className="text-center">
						<img src={logo} alt="Sangwin Gawande" className="logo" />
					</div>

					<label className="w3-text-blue"><b>Email</b></label>
					<input ref={emailRef} className="w3-input w3-border" required type="email" />
					{/* <div className="w3-panel w3-red" >Please enter valid email address</div> */}

					<label className="w3-text-blue"><b>Password</b></label>
					<input ref={passwordRef} className="w3-input w3-border" required type="password" />
					{/* <div className="w3-panel w3-red">Password must be at least 6 characters long, and contain a number</div> */}
					<br />
					<button className="w3-btn w3-blue" type="submit" disabled={isSubmitted}>Login <i className="w3-medium fa fa-check"></i> </button>
				</form>
				<div className="w3-panel w3-blue-gray">
					<h4>Notes : </h4>
					<p>Credentials : admin@yopmail.com &amp; admin123</p>
					<p>All data will be reset when window refreshed</p>
				</div>
			</div>
		</>
	);
}

export default Login;
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */