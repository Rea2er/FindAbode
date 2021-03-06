import React, { Component } from 'react'
import Header from '../components/Header'
import Service from '../components/Service'
import Process from '../components/Process'
import Apartment from '../components/Apartment'
import Review from '../components/Review'
import Links from '../components/Links'
import Footer from '../components/Footer'

class Home extends Component {

  render() {
    return (
      <>
        <Header />
        <Service />
        <Process />
        <Apartment />
        <Review />
        <Links />
        <Footer />
      </>
    )
  }
}

export default Home;