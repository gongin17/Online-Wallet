import React from 'react'
import { useEffect, useState, useContext } from "react";
import AuthContext from "../Service/AuthContext";
import transferService from "../Service/transferService";
import "../App.css";



{/*select SUM(amount) from transaction where sender=userA  
select SUM(amount) from transaction where reciever=userA where date between 'dd-mm-y' and 'dd-mm-y */}


const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState([]);
  let { user } = useContext(AuthContext);
  const username = user.sub;

  const filterReceivedTransacton = (u) => {
    const filteredTransaction = transactions.filter(
      (t) => t.reciever === u
    );
    setFilter(filteredTransaction);
  };
  
  const filterSentTransacton = (u) => {
    const filteredTransaction = transactions.filter((t) => t.sender === u);
    setFilter(filteredTransaction);
  };
  

  useEffect(() => {
    transferService
      .getTransactionsAllTime()
      .then((response) => {
        setTransactions(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
    <div className="container bg-color">
      <div className=" d-flex justify-content-center  mt-3 py-3 ">
      <div className="mx-1 ">
        <button
          className="btn btn-outline-dark px-4 "
          onClick={()=>setFilter(transactions)}
        >
          All
        </button>
        </div>
        <div className="mx-3">
        <button
          className="btn btn-outline-dark "
          onClick={()=>filterReceivedTransacton(username)}
        >
          Money in
        </button>
        </div>
        <div className="mx-1">
        <button
          className="btn btn-outline-dark "
          onClick={()=>filterSentTransacton(username)}
        >
          Money out
        </button>
        </div>
      </div>
      
      <div className=" table-responsive">
        <table className="table table-hover">
          <thead >
            <tr>
              <th scope="col">Trans Id</th>
              <th scope="col">from</th>
              <th scope="col">from No</th>
              <th scope="col">to</th>
              <th scope="col"> to No</th>
              <th scope="col">Date </th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
          
            { filter.map( (trans)=>{
                    return (
                        <tr key={trans.idTransaction}>
                        <td scope="row"> {trans.idTransaction}</td>
                        <td>{trans.sender}</td>
                        <td>@mdo</td>
                        <td>{trans.reciever}</td>
                        <td>@mdo</td>
                        <td>{trans.datetransfer}</td>
                        <td>{trans.amount}</td>
                    </tr>
                    )

                    }
                ) }
          </tbody>
        </table>
      </div>
      </div>
 
  );
};

export default Transaction;
