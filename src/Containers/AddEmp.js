import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { empcreate } from "../Actions/Auth";

function AddEmp({ empcreate, isAuthenticated }) {
  const [empcreated, setempcreated] = useState(false);
  const [empName, setEmpName] = useState("")
  const [FD, setFD] = useState(false)
  const [SD, setSD] = useState(false)
  const [BD, setBD] = useState(false)
  const [NBD, setNBD] = useState(false)

  // const [Formdata, setFormdata] = useState({
  //   name: "",
  //   first_dose: FD,
  //   second_dose: SD,
  //   both: BD,
  //   not_both: NBD,
  // });

  const [Formdata, setFormdata] = useState({});
  
 


  // const handleclicks = (e) => {
  //   setChecked(true,{...Formdata,[e.target.name]: e.target.value})
  // }
 
  


  const { name, first_dose, second_dose, both, not_both } = Formdata;

  const onChange = (e) => {
    setEmpName(e.target.value)
  }

  console.log("Formdata",Formdata)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("e to check",e)
    // console.log("name",name);
    // console.log("firstDose",first_dose);
  
    setFormdata({
      name : empName,
      first_dose : FD,
      second_dose : SD,
      both : BD,
      not_both : NBD
    })
    empcreate(empName, FD, SD, BD, NBD);
    setempcreated(true);
  };
  
  const fullyVaccinated = (e) => {
    setBD(!BD)
    setFD(!FD)
    setSD(!SD)
  }
  
  if (empcreated) {
    return <Redirect to="/emp" />;
  }

  return (
    <div className="container mt-5">
      <h1>Add employee details</h1>
     
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Employee name*"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <br/>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="first_dose"
            value = {first_dose}
            checked = {FD}
            onChange={(e) => {setFD(!FD)}}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            First Dose
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={second_dose}
            checked = {SD}
            onChange={(e) => {setSD(!SD)}}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Second Dose
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={both}
            checked = {BD}
            onChange={(e) => {fullyVaccinated(e)}}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            fully vaccinated
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={not_both}
            checked = {NBD}
            onChange={(e) => {setNBD(!NBD)}}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            not yet vaccinated
          </label>
        </div>
        

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { empcreate })(AddEmp);
