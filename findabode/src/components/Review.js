import React, { Component } from 'react'
import customer1 from '../images/customer1.jpg'
import customer2 from '../images/customer2.jpg'
import customer3 from '../images/customer3.jpg'

class Review extends Component {
  render() {
    return (
      <section className="section-testimonials">
        <div className="timeline">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="testimonials">
          <div>
            <blockquote>
              Omnifood is just awesome! I just launched a startup which leaves me
              with no time for cooking, so Omnifood is a life-saver. Now that I
              got used to it, I couldn't live without my daily meals!
            <cite
              ><img src={customer1} alt="Customer1" />Alberto
              Duncan</cite
              >
            </blockquote>
          </div>

          <div>
            <blockquote>
              Inexpensive, healthy and great-tasting meals, delivered right to my
              home. We have lots of food delivery here in Lisbon, but no one comes
              even close to Omifood. Me and my family are so in love!
            <cite
              ><img src={customer2} alt="Customer2" />Joana
              Silva</cite
              >
            </blockquote>
          </div>

          <div>
            <blockquote>
              I was looking for a quick and easy food delivery service in San
              Franciso. I tried a lot of them and ended up with Omnifood. Best
              food delivery service in the Bay Area. Keep up the great work!
            <cite
              ><img src={customer3} alt="Customer3" />Milton
              Chapman</cite
              >
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
}
export default Review