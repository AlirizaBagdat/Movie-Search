import React, { Component } from "react";
import {Route, Navigate} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    return (
        <Route
        {...rest}
        render={(props) => 
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
        }
        />
    
    );
};

export default PrivateRoute;