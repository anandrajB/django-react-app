import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../Actions/Auth";
import { GoogleLoginButton } from "react-social-login-buttons";
import '../test.css';
import Header from "./Header";

function Login({ login, isAuthenticated }){

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, seterrors] = useState(false)

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email,password)
    try {
      login(email, password);
      
      seterrors(true)
    }
    catch(error){

      
    }
    
  };

 

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  
  return (
    
    <div class="container">
      
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form onSubmit={(e) => onSubmit(e)} class="form-signin">
                <div class="form-label-group rounded">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="inputEmail">Email address</label>
                </div>
                
                {errors == true && <p>oops! can't login with given credentials</p>}
                <button
                  class="btn btn-success "
                  type="submit"
                  
                >
                  Sign in 
                </button>
                

                <p className='mt-3'>
                Register your domain  <Link to='/sign'>here</Link>
                </p>
                <hr class="my-4" />
                <GoogleLoginButton
                  class="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <i class="fab fa-google mr-2"></i> Sign in with Google
                </GoogleLoginButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);


