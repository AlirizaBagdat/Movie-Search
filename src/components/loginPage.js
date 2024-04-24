import React from "react";
const loginPage =()=>{
    const handleLogin = () => {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = '/search';
    };
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
    
}
