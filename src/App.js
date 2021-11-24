import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Layout from "./Hooks/Layout";
import store from "./Store";
import Employee from './Containers/Employee';
import ApexChart from "./Containers/Chart";
import About from "./Containers/About";
import AddEmp from "./Containers/AddEmp";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route path='/about' component={About}/>
            <Route  path="/sign" component={Signup} />
            <Route  path="/emp" component={Employee} />
            <Route path="/chart" component={ApexChart} />
            <Route path='/empr' component={AddEmp}/>
            <Route  path="/register" component={Signup} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
