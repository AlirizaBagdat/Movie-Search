import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginPage';
import SignupPage from './components/signup';
import SearchPage from './components/search';
import PrivateRoute from './components/privateRoute';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/search" component={SearchPage} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App
