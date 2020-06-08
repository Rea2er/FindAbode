import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import DetailRoom from './pages/DetailRoom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Navbar from './components/Navbar';
import UserContextProvider from './contexts/UserContext'

class App extends Component {
  render() {
    return (
      <>
        <UserContextProvider>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:result" component={DetailRoom} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </UserContextProvider>
      </>
    );
  }
}

export default App;
