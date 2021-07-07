import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./layout/Navbar";
import NotFound from "./components/NotFound";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from "./User";
import { Redirect, Route, Switch } from "react-router";
const App = () => {

    return (
<>
<div className="App">
    <Navbar/>
    <Switch><Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/users/add" component={AddUser}/>
<Route exact path="/users/edit/:id" component={EditUser}/>
<Route exact path="/users/:id" component={User}/>
<Route component={NotFound} />
<Redirect to="/"/></Switch>
</div>

</>
    );
};

export default App;