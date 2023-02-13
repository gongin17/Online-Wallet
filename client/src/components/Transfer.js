import React from "react";
import { useState } from "react";
import TransferService from "../Service/transferService";
import accountService from "../Service/accountService";
import { useContext } from "react";
import AuthContext from "../Service/AuthContext";
import "../App.css";

const Transfer = () => {
  const [amount, setAmount] = useState("");
  const [amountConfirm, setAmountConfirm] = useState("");
  const [reciever, setReciever] = useState("");
  const [recieverNo, setRecieverNo] = useState("");
  const [purpose, setPurpose] = useState("");

  let { user } = useContext(AuthContext);
  let sender = user.sub;

  let today = new Date();
  let datetransfer =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const transferInfo = { amount, sender, reciever, datetransfer, purpose };

  const saveInfo = (e) => {
    e.preventDefault();
    console.log(transferInfo);
    if (amount === amountConfirm) {

    TransferService.newTransfer(transferInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
       console.log(error);
      });
    }
  };

  const updateSenderAndRecieverBalance = (e) => {
    e.preventDefault();

    accountService
      .UpdateSNR(transferInfo)
      .then((response) => {
        console.log("updated user");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  //}

  return (
    <div className="container  bg-color  ">
      <div className="row  mt-4 mb-5 pb-4 ">
        <div className=" d-flex  justify-content-center align-items-center ">
          <div className="card mt-4 ">
            <h5 className=" text-center">Make transfer</h5>
            <div className=" m-2 width-card">

            <input
                type="text"
                className="form-control ml-2  "
                placeholder="Full Name"
                value={reciever}
                onChange={(e) => {
                  setReciever(e.target.value);
                }}
              />
            
            </div>
            <div className=" m-2 width-card">
            <input
                type="text"
                className="form-control mr-2 "
                placeholder="Account Number"
                id="f3"
                value={recieverNo}
                onChange={(e) => {
                  setRecieverNo(e.target.value);
                }}
              />
              
            </div>
            <div className=" d-flex m-2 width-card">

            <input
              type="text"
              className="form-control "
              placeholder="Amount"
              id="f1"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              />
            <input
                type="text"
                className="form-control "
                placeholder="Confirm Amount"
                value={amountConfirm}
                onChange={(e) => {
                  setAmountConfirm(e.target.value);
                }}
              />
             
            </div>
            <div className=" m-2 width-card">
              <input
                   type="text"
                   className="form-control  "
                   value={purpose}
                   onChange={(e) => {
                     setPurpose(e.target.value);
                   }}
                   placeholder="Purpose"
              />
            </div>
            <div className="m-2 width-card">
              <div className="">
                <button
                 type="button" 
                 className="main-btn rounded-pill  "
                 onClick={(e) => {
                   saveInfo(e);
                   updateSenderAndRecieverBalance(e);
                 }}
                 >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Transfer;
