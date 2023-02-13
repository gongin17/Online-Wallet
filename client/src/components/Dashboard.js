import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import accountService from "../Service/accountService";
import AuthContext from "../Service/AuthContext";
import transferService from "../Service/transferService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [Balance, setBalance] = useState(0);

  const [TransactionInSevenDays, setTransactionInSevenDays] = useState(null);

  const [MoneyInSevenDays, setMoneyInSevenDays] = useState(0);
  const [MoneyInToday, setMoneyInToday] = useState(0);
  const [MoneyInMonth, setMoneyInMonth] = useState(0);
  const [MoneyInTotal, setMoneyInTotal] = useState(0);

  const [MoneyOutSevenDays, setMoneyOutSevenDays] = useState(0);
  const [MoneyOutToday, setMoneyOutToday] = useState(0);
  const [MoneyOutMonth, setMoneyOutMonth] = useState(0);
  const [MoneyOutTotal, setMoneyOutTotal] = useState(0);

  const [valueIn, setValueIn] = useState(0);
  const [valueOut, setValueOut] = useState(0);

  const onOptionChangeHandlerIn = (e) => {
    setValueIn(e.target.value);
  };

  const onOptionChangeHandlerOut = (e) => {
    setValueOut(e.target.value);
  };

  let { user } = useContext(AuthContext);
  const username = user.sub;

  let today = new Date();
  let currentdate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    accountService
      .getUserData(username)
      .then((response) => {
        console.log(response.data.balance);
        setBalance(response.data.balance);
      })
      .catch((err) => console.log(err));

    transferService
      .getTransactionsSevenDays(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setTransactionInSevenDays(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyInMonth(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setMoneyInMonth(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyInSevenDays(currentdate, username)
      .then((response) => {
        console.log(response);
        setMoneyInSevenDays(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyInToday(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setMoneyInToday(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyInTotal(username)
      .then((response) => {
        console.log(response.data);
        setMoneyInTotal(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyOutTotal(username)
      .then((response) => {
        console.log(response.data);
        setMoneyOutTotal(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyOutMonth(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setMoneyOutMonth(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyOutSevenDays(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setMoneyOutSevenDays(response.data);
      })
      .catch((err) => console.log(err));

    transferService
      .getMoneyOutToday(currentdate, username)
      .then((response) => {
        console.log(response.data);
        setMoneyOutToday(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" mt-2 mb-5 bg-color">
      <div className="row ">
        <div className="col-md-4 col-lg-4">
          <div className=" d-flex justify-content-center m-2">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Account Balance</h5>
                <h3 className="card-text">{Balance} USD</h3>
                <p className="card-text">Available</p>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-center bg-color    ">
            <div className="  fw-bold width-card ">Actions</div>
          </div>

          <div className=" d-flex justify-content-center m-2">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <select
                  className=" form-select  mb-3 w-50 "
                  onChange={onOptionChangeHandlerIn}
                >
                  <option value={MoneyInToday}>today</option>

                  <option value={MoneyInSevenDays}>last week</option>
                  <option value={MoneyInMonth}>last month</option>
                  <option value={MoneyInTotal}>all time</option>
                </select>
                <h5 className="card-title fw-bold">Money in</h5>
                <h3 className="card-text">{valueIn} USD</h3>
                <p className="card-text">Total received</p>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-center m-2">
            <div className="card border" style={{ width: "18rem" }}>
              <div className="card-body">
                <select
                  className=" form-select  mb-3 w-50 "
                  onChange={onOptionChangeHandlerOut}
                >
                  <option value={MoneyOutToday}>today</option>

                  <option value={MoneyOutSevenDays}>last week</option>
                  <option value={MoneyOutMonth}>last month</option>
                  <option value={MoneyOutTotal}>all time</option>
                </select>
                <h5 className="card-title fw-bold">Money out</h5>
                <h3 className="card-text">{valueOut} USD</h3>
                <p className="card-text">Total sent or spent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 ">
          <div className="row text-center  m-3 ">
            <div className="  ">
              <div className="card " style={{ height: "14rem" }}>
                <h4 className="mt-3 fw-bold">Recent activity</h4>

                <div className=" table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {TransactionInSevenDays !=null?
                      TransactionInSevenDays.map((t) => {
                        return (
                          <tr key={t.idTransaction}>
                            <td scope="row"> {t.idTransaction}</td>

                            {t.sender === username ? (
                              <td>
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  style={{ color: "green" }}
                                />
                              </td>
                            ) : (
                              <td>
                                <FontAwesomeIcon
                                  icon={faArrowDown}
                                  style={{ color: "red" }}
                                />
                              </td>
                            )}

                            <td>{t.sender}</td>

                            <td>{t.reciever}</td>

                            <td>{t.datetransfer}</td>
                            <td>{t.amount}</td>
                          </tr>
                        );
                      }):<tr><td>New transactions wil pop up here</td></tr>
                    
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
