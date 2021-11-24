import axios from "axios";
import { data } from "jquery";
import React, { useEffect, useState } from "react";
import "../Assets/employees.css";

function Employee() {
  let config;

  const [result, setresult] = useState({});
  const [names, setName] = useState([])
  
 

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
    getfunction();
  }, []);

  const getfunction = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/accounts/emp/`,
      config
    );
    console.log(data.data);
    console.log(data)
    setName(data.data)
    
  
    
  };

  return (
    <div className="justify-content-center">
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">First_dose</th>
            <th scope="col">Both_dose</th>
            <th scope="col">Not_both_dose</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            {names.map ((num,index) => {
              return (
                <td> {num.name}</td>
              )
            }) }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
