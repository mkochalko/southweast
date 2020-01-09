import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer';
import SignUpContainer from "./session_form/signup_form_container"
import UsersShowContainer from './users_page/users_container';
import Home from './home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Helmet } from 'react-helmet';

const TITLE = "SouthWeast"
    // < img src = 'http://cdn.shopify.com/s/files/1/0891/8314/products/Patrick_Star_mem_515a0f9e16255_grande.jpeg?v=1459072430' alt = 'southweast' height = '18px' width = '15px' />
const App = () => (
    <div>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
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
<<<<<<< HEAD
            <Route path="/users/:userId" component={UsersShowContainer}/>
>>>>>>> dev
=======
            <ProtectedRoute path="/users/:userId" component={UsersShowContainer}/>
>>>>>>> dev
        </Switch>
        <Footer />
    </div>
)

export default App;