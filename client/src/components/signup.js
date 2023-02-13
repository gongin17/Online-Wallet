import React from "react";
import { useState } from "react";
import AccountService from "../Service/accountService";
import { useNavigate } from "react-router-dom";

const AddAccount = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const role = "user";

  const navigate = useNavigate();
  const accountInfo = { balance, username, email, phone, password, role };

  const saveInfo = (e) => {
    e.preventDefault();

    AccountService.addNewAccount(accountInfo)
      .then((response) => {
        console.log(accountInfo);
        navigate("/transactions-history");
        // console.log(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  return (
    <div
      className="container my-3 border "
      style={{ width: "340px", height: "100vh", boxShadow: " 3px 3px #888888" }}
    >
      <h3 className="text-center my-5">Banking Sys</h3>

      <h5 className="text-center mt-5 mb-3">Create New Account :</h5>

      <form onSubmit={saveInfo}>
        <div className=" mb-3 mx-4">
          <input
            className="form-control "
            placeholder="Full Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className=" mb-3 mx-4">
          <input
            className="form-control  "
            placeholder="Balance"
            onChange={(e) => {
              setBalance(e.target.value);
            }}
          />
        </div>

        <div className=" mb-3  mx-4 ">
          <input
            placeholder="Email"
            className="form-control "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className=" mb-3  mx-4">
          <input
            placeholder="Phone"
            className="form-control "
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className=" mb-3  mx-4">
          <input
            type="password"
            placeholder="Password"
            className="form-control "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className=" mb-3  mx-4">
          <button className="btn btn-primary form-control">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
