import React from 'react'
import { createContext, useState,  } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {



  let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? 
  JSON.parse(localStorage.getItem('authTokens')) : null);

  let [user, setUser] = useState(localStorage.getItem('authTokens') ?
   jwt_decode(localStorage.getItem('authTokens')) : null);

  const navigate = useNavigate();

 

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    console.log(authTokens);
   

    if (response.status === 200) {
   
      console.log(data);
     
      setAuthTokens(data.jwt);
      console.log(data.jwt);
      console.log(jwt_decode(data.jwt).sub);
      setUser(jwt_decode(data.jwt));
      console.log(user);
      localStorage.setItem('authTokens', JSON.stringify(data))
    
      navigate("/dashboard");
    } 
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);

    localStorage.removeItem("authTokens");
    navigate("/dashboard");
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };
console.log("the user after set is :",user)
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
