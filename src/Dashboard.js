/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React, { useContext } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import AuthContext from "./auth/auth-context";
import StudentContextProvider from "./student/StudentContextProvider";
import logo from "./sangwin-logo.png"


const Dashboard = () => {
    const authCtx = useContext(AuthContext);

    if (authCtx.isLoggedIn === false) {
        return <Navigate to="/login" />;
    }

    const logOut = () => {
        authCtx.logout();
    }

    const activeStyles = ({ isActive }) => {
        const linkClasses = ['w3-bar-item w3-button'];
        if (isActive) linkClasses.push('w3-teal');
        return linkClasses.join(" ");
    }

    return (
        <StudentContextProvider>
            <nav className="w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card-2" style={{ 'zIndex': 3, 'width': '250px' }} id="mySidebar">
                <img src={logo} className="logo" alt="Sangwin Gawande Logo" />
                <NavLink to="/" className={activeStyles}> <i className="w3-medium fa fa-user"></i>  User List</NavLink>
                <NavLink to="/add" className={activeStyles}> <i className="w3-medium fa fa-plus"></i>  Add new user</NavLink>
                <NavLink to="/login" className={activeStyles} onClick={logOut}><i className="w3-medium fa fa-sign-out"></i>  Logout</NavLink>
            </nav>
            <div className="w3-main" style={{ 'marginLeft': '250px' }}>
                <div className="w3-container">
                    <Outlet />
                </div>
            </div>
        </StudentContextProvider>
    )
}

export default Dashboard;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */