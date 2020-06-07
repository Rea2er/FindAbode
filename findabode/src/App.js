import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}

export default App;
