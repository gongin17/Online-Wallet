import React, { useState, useEffect } from "react";
import accountService from "../Service/accountService";
import "../App.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    accountService
      .getAccounts()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container bg-color ">
      <div className="table-responsive">
        <table className=" table table-hover">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Account No</th>
              <th scope="col">Availabe Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr key={customer.account_number}>
                  <td scope="row">{customer.username}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.account_number}</td>
                  <td>{customer.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
