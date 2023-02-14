import React, { useContext} from "react";

import AuthContext from "../Service/AuthContext";
const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div
      className="container my-3 border "
      style={{ width: "340px", height: "100vh", boxShadow: " 3px 3px #888888", }}
    >
      <form onSubmit={loginUser}>
      <h3 className="text-center my-3">Online Wallet</h3>
        

        <div className=" mb-3 mx-4">
          <input
          name="username"
            type="text"
            className="form-control "
            placeholder="   Username"
          />
        </div>

        <div className="mb-3 mx-4">
          <input
          name="password"
            type="password"
            className="form-control "
            placeholder="   Password"
         
          />
        </div>

        <div className="mb-4 mx-4">
          <button className=" btn btn-primary form-control ">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
