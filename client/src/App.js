import './App.css';
import Home from './Pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';

function App() {
  return (
   <Router>
     <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/SignIn" component={SignInPage} exact />
      <Route path="/SignUp" component={SignUpPage} exact />
     </Switch>
   </Router>
  );
}

export default App;
