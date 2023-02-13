import React from 'react'
import {  Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Service/AuthContext'

const PrivateRoute = ({children}) => {

    let {user}  = useContext(AuthContext);

    console.log(user)
    console.log(children)
    return user? children : < Navigate to="/" />   ;


    
}

export default PrivateRoute;