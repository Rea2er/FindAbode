import React, { Component } from 'react'
import Links from '../components/Links'
import Footer from '../components/Footer'
import launch from '../images/launch.png'
import ad from '../images/ad.jpg'

const details = {
  name: "single economy",
  description:
    "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  extras: [
    "Plush pillows and breathable bed linens",
    "Soft, oversized bath towels",
    "Full-sized, pH-balanced toiletries",
    "Complimentary refreshments",
    "Adequate safety/security",
    "Internet",
    "Comfortable beds"
  ],
  price: 100,
  size: 200,
  capacity: 1,
  pets: false,
  breakfast: false
}
class DetailRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: this.props.match.params.result
    }
  }

  render() {
    return (
      <>
        <section className="single-room">
          <div className="book-container">
            <img src={launch} alt="" className="room-images-banner" />
            <div className="book-card">
              <img className="ad-img" src={ad} alt="" />
              <button className="book-btn">Book Appointment</button>
            </div>
          </div>
          <div className="single-room-images">
            <img src={launch} alt="" />
            <img src={launch} alt="" />
            <img src={launch} alt="" />
          </div>
          <div className="single-room-info">
            <div className="desc">
              <h3>details</h3>
              <p>{details.description}</p>
            </div>
            <div className="info">
              <h3>info</h3>
              <p>price : ${details.price}</p>
              <p>size : {details.size} SQFT</p>
              <p>
                max capacity : {
                  details.capacity > 1 ? `${details.capacity} people` : `${details.capacity} person`
                }
              </p>
              <p>{details.pets ? 'pets allowed' : 'no pets allowed'}</p>
              <p>{details.breakfast && 'free breakfast included'}</p>
            </div>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {details.extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
        <Links />
        <Footer />
      </>
    )
  }
}
export default DetailRoom