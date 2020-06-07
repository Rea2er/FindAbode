import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const auth = this.props.auth
    return (
      < header className="nav-home" >
        <h1 className="nav-logo">FindAbode</h1>
        <nav>
          <ul className="nav-link">
            <li><Link className="link" to=''>Apartments</Link></li>
            <li><Link className="link" to=''>Services</Link></li>
            <li><Link className="link" to=''>Contact</Link></li>
            {
              (auth === undefined || auth.email.length === 0) && <li><Link className="link" to='signin'>Sign In</Link></li>}
          </ul>
        </nav>
        {(auth === undefined || auth.email.length === 0) ? <Link className="link sign-up" to='signup'><button>Sign Up</button></Link> :
          <Link className="link sign-up" to={{
            pathname: 'profile',
            state: {
              auth
            }
          }}><button>Profile</button></Link>}
      </header >
    )
  }
}
export default Navbar;