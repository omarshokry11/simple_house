import React from 'react';
import MainNavbar from "./Component/MainNavbar.js";
import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import MainFooter from "./Component/MainFooter.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
    return(
        <div className="container">
            <BrowserRouter>
                <MainNavbar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
                <MainFooter />
            </BrowserRouter>
        </div>
    )
}