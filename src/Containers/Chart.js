import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


export default function ApexChart(){

  const [result,setResult]=useState({});
  const [fd,setFd]=useState(0);
  const [sd,setSd]=useState(0);
  const [emp,setEmp]=useState(0)
  const [nbd,setnbd] = useState(0);
  const [bd,setbd] = useState(0);
  let config;
  var options;
  
  if (localStorage.getItem("token")) {
    config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };
}
useEffect(()=>{
  getOperation();
},[])

options = {
  series: [fd,sd,emp,nbd , bd],
  labels: ["First Dose", "Second Dose", "employees",'not both doses','both-doses']
}

const getOperation=async()=>{
  const {data} =  await axios.get(`https://jabtracanand.herokuapp.com/accounts/count/`,config)
    console.log(data.data)
    setResult(data.data)
    console.log(setResult)
    setSd(data.data.SD);
    setFd(data.data.FD);
    setEmp(data.data.employees)
    setnbd(data.data.NBD)
    setbd(data.data.BD)
}
    
    
    // console.log("hello",props)
    return (
      <div className='d-flex justify-content-center'>
        <br/>
        <br/>
         <Chart options={options} series={options.series} type="pie" width={500} height={320} />
      </div>
          
    )
}


