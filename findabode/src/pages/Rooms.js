import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import Links from '../components/Links'
import Footer from '../components/Footer'
import launch from '../images/launch.png'
import { Link } from 'react-router-dom'

class Rooms extends Component {
  state = {
    featureRoom: [
      {
        id: '1',
        subTitle: '3 beds 2 baths',
        title: 'Modern home in the heart of historic Los Angeles',
        desc: '$1,900.00 ',
        descTail: '/ month',
        review: '4/5 stars ',
        reviewTail: '(based on 34 reviews)'
      },
      {
        id: '2',
        subTitle: '3 beds 2 baths',
        title: 'Modern home in the heart of historic Los Angeles',
        desc: '$1,900.00 ',
        descTail: '/ month',
        review: '4/5 stars ',
        reviewTail: '(based on 34 reviews)'
      },
      {
        id: '3',
        subTitle: '3 beds 2 baths',
        title: 'Modern home in the heart of historic Los Angeles',
        desc: '$1,900.00 ',
        descTail: '/ month',
        review: '4/5 stars ',
        reviewTail: '(based on 34 reviews)'
      },
      {
        id: '4',
        subTitle: '3 beds 2 baths',
        title: 'Modern home in the heart of historic Los Angeles',
        desc: '$1,900.00 ',
        descTail: '/ month',
        review: '4/5 stars ',
        reviewTail: '(based on 34 reviews)'
      }
    ]
  }
  render() {
    return (
      <>
        <SearchBar />
        <div className="apart-main-container">
          {this.state.featureRoom.map((item, index) => {
            return <div key={index} className="apart-container">
              <img src={launch} className="card-img" alt="aprts showcases" />
              <div className="search-apart-container">
                <p className="text-title">{item.title}</p>
                <p className="text-desc">{item.desc}<span className="text-tiny">{item.descTail}</span></p>
                <p className="text-review">{item.review}<span className="text-tiny">{item.reviewTail}</span></p>
              </div>
              <div>
                <Link to={`/rooms/${item.id}`}><button>Detail</button></Link>
                <p className="text-subtitle btn-below">{item.subTitle}}</p></div>
            </div>
          })}
        </div>
        <Links />
        <Footer />
      </>
    )
  }
}
export default Rooms