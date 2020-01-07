import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer';
import SignUpContainer from "./session_form/signup_form_container"


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <Route path="/signup" component={SignUpContainer}/>
        </Switch>
        <Footer />
    </div>
)

export default App;