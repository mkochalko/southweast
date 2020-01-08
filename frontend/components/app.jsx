import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer';
import SignUpContainer from "./session_form/signup_form_container"
import UsersShowContainer from './users_page/users_container';
import Home from './home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
<<<<<<< HEAD
            {/* <Route path="/signup" component={SignUpContainer}/> */}
            {/* <Route path="/users/:userId" component={UsersShowContainer}/> */}
=======
            <Route exact path='/' component={Home}/>
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <Route path="/users/:userId" component={UsersShowContainer}/>
>>>>>>> dev
        </Switch>
        <Footer />
    </div>
)

export default App;