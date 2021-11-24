import axios from "axios";
import { Chart } from "chart.js";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../Actions/Auth";
import "../Assets/Home.css";
import store from "../Store";


function Home(login , isAuthenticated) {
  const [result, setResult] = useState({});
  const [fd, setFd] = useState(0);
  const [sd, setSd] = useState(0);
  const [emp, setEmp] = useState(0);
  const [nbd, setnbd] = useState(0);
  const [bd, setbd] = useState(0);

  const [email, setemail] = useState('')

  const { mystate } = login
  // console.log(mystate)

  let config;

  if (localStorage.getItem("token")) {
    config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };
  }
  useEffect(() => {
    getOperation();
  }, []);

  

  const getOperation = async () => {
    const { data } = await axios.get(
      `https://jabtracanand.herokuapp.com/accounts/count/`,
      config
    );
    console.log(data.data);
    setResult(data.data);
    setSd(data.data.SD);
    setFd(data.data.FD);
    setEmp(data.data.employees);
    setnbd(data.data.NBD);
    setbd(data.data.BD);
  };


  return (
    <div>
      <div class="row">
        <div class="column">
          <div class="card">
            <h3>{emp}</h3>
            <p>Employees</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>{fd}</h3>
            <p>first dose</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>{bd}</h3>
            <p>both doses</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>{nbd}</h3>
            <p>not vaccinated yet</p>
          </div>
        </div>
      </div>
    </div>
  );
  }



const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps,{login})(Home);
