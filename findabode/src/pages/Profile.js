import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { auth } = this.props.location.state
    return (
      <div>
        <Navbar auth={auth} />
        <Link className="link sign-up" to={{
          pathname: '/',
          state: {
            email: '',
            login: false
          }
        }}><button>Logout</button></Link>
      </div>
    )
  }
}

export default Profile