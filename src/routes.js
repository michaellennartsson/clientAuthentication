import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RequireAuth from './components/require_auth';

import App from './components/app';
import Jumbotron from './components/jumbotron';
import About from './components/about';
import Contact from './components/contact';
import TicTacToe from './components/tic_tac_toe';
import Pong from './components/pong';
import CurrencyConverter from './components/currency_converter';
import SignIn from './components/sign_in';
import SignOut from './components/sign_out';
import SignUp from './components/sign_up';
import UserPage from './components/user_page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Jumbotron} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="tic-tac-toe" component={TicTacToe} />
        <Route path="pong" component={Pong} />
        <Route path="currency-converter" component={CurrencyConverter} />
        <Route path="sign-in" component={SignIn} />
        <Route path="sign-out" component={SignOut} />
        <Route path="sign-up" component={SignUp} />
        <Route path="user" component={RequireAuth(UserPage)} />
    </Route>
);
