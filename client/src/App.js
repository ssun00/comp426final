import './App.css';
import Home from './Pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import WholesomePage from './Pages/Wholesome';
import React from 'react';
import { ProvideAuth } from "./useAuth.js";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/SignIn" component={SignInPage} exact />
          <Route path="/SignUp" component={SignUpPage} exact />
          <Route path="/Wholesome" component={WholesomePage} exact />
        </Switch>
      </Router>
  </ProvideAuth>
  );
}

export default App;
