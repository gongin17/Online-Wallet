import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Transfer from "./components/Transfer";
import { Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Login from "./components/login";
import AddAccount from "./components/signup";
import { AuthProvider } from "./Service/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import AuthContext from "./Service/AuthContext";

function App()  {
  let { user } = useContext(AuthContext);
  console.log(user);
 

 
  return (
    <div>
      
        <Routes>
          <Route
            exact
            path="/login"
            element={!user ? <Login /> : <>
            <NavBar />
            <Dashboard />
          </> }
          />
          <Route
            exact
            path="/signup"
            element={!user ? <AddAccount />: <>
            <NavBar />
            <Dashboard />
          </> }
           
          />
          <Route exact path="/"    
            
            element={!user ? <Home /> :
             <>
            <NavBar />
            <Dashboard />
          </> }
            />
          
          

          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <NavBar />
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/money-transfer"
            element={
              <PrivateRoute>
                <NavBar />
                <Transfer />
              </PrivateRoute>
            }
          />

          <Route
            path="/list-customers"
            element={
              <PrivateRoute>
                <NavBar />
                <Customers />
              </PrivateRoute>
            }
          />
         
          <Route
            path="/transactions-history"
            element={
              <PrivateRoute>
                <NavBar />
                <Transaction />
              </PrivateRoute>
            }
          />

        </Routes>
       
    </div>
  );
 
};

export default App;
