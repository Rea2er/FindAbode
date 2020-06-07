import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import launch from '../images/launch.png'

class Apartment extends Component {
  render() {
    return (
      <section className="section-apartments">
        <div className="timeline">
          <h1>We're currently in these cities</h1>
        </div>

        <div className="apartments-containers">
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
        </div>

        <div className="apartments-containers">
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
          <div>
            <img className="apart" src={launch} alt="Lisbon" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              1600+ happy eaters
          </div>
            <div className="city-feature">
              60+ top chefs
          </div>
            <div className="city-feature">
              <Link to="">@omnifood_lx</Link>
            </div>
          </div>
        </div>
        <button className="view-more">View More</button>
      </section>
    )
  }
}
export default Apartment