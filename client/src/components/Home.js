import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div className="container mt-5 border " style={{width:"350px",height:"50vh"
    ,boxShadow: " 3px 3px #888888",}}>

       <h3 className="text-center mt-5"> Bank Sys</h3>
      <p className="text-center"> Current Date (Y-m-d) : {date}</p>
      <p className="text-center"> use for username : userA , password : 1111</p>
      <div className=" d-flex justify-content-center ">
      <div className="" >
          <button className="btn btn-primary mx-3" 
          style={{width:"150px"}}
          onClick={()=>{
            navigate('/login')
          }}
          >Login</button>
        </div>
        <div className="" >
          <button className="btn btn-secondary mx-3" 
          style={{width:"150px"}}
          onClick={()=>{
            navigate('/signup')
          }}
          >Sign up </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
