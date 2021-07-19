import React from 'react';
import Header from "../common/header/Header";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import ReactDOM from 'react-dom';
// import Routes from "./Routes";
import {BrowserRouter, Router, Switch, Route } from "react-router-dom";

function Controller() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <div className="app">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/details" component={Details} />
                    </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
}

export default Controller;