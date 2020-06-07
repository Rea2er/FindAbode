import React, { Component } from 'react'

class Process extends Component {

  state = {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepFive: false,
    width: ''
  }

  render() {
    const { stepOne, stepTwo, stepThree, stepFour, stepFive, width } = this.state
    return (
      <section>
        <h1 className="timeline">CREATIVE TIMELINE</h1>
        <br />
        <div className="process-wrapper">
          <div className="progress-bar-container">
            <ul>
              <li onClick={() => this.setState({
                stepOne: true,
                stepTwo: false,
                stepThree: false,
                stepFour: false,
                stepFive: false,
                width: 's-one'
              })} className={stepOne ? "step step01 active" : "step step01"}>
                <div className="step-inner">STEP 1</div>
              </li>
              <li onClick={() => this.setState({
                stepOne: false,
                stepTwo: !stepTwo,
                stepThree: false,
                stepFour: false,
                stepFive: false,
                width: 's-two'
              })} className={stepTwo ? "step step02 active" : "step step02"}>
                <div className="step-inner">STEP 2</div>
              </li>
              <li onClick={() => this.setState({
                stepOne: false,
                stepTwo: false,
                stepThree: !stepThree,
                stepFour: false,
                stepFive: false,
                width: 's-three'
              })} className={stepThree ? "step step03 active" : "step step03"}>
                <div className="step-inner">STEP 3</div>
              </li>
              <li onClick={() => this.setState({
                stepOne: false,
                stepTwo: false,
                stepThree: false,
                stepFour: !stepFour,
                stepFive: false,
                width: 's-four'
              })} className={stepFour ? "step step04 active" : "step step04"}>
                <div className="step-inner">STEP 4</div>
              </li>
              <li onClick={() => this.setState({
                stepOne: false,
                stepTwo: false,
                stepThree: false,
                stepFour: false,
                stepFive: !stepFive,
                width: 's-five'
              })} className={stepFive ? "step step05 active" : "step step05"}>
                <div className="step-inner">STEP 5</div>
              </li>
            </ul>

            <div className="line">
              <div id="line-progress" className={width}></div>
            </div>
          </div>

          <div className="progress-content-section">
            <div
              className={stepOne ? "section-content discovery active" : "section-content discovery"}>
              <h2>SIGN IN WITH US</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque justo, consequat non fermentum ac, tempor eu turpis. Proin
                nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
                in dapibus lorem. Suspendisse vitae velit ac ante consequat
                placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
                consequat eu. Praesent pulvinar tincidunt leo et condimentum.
                Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
                odio, venenatis at ex a, lacinia suscipit orci.
            </p>
            </div>

            <div
              className={stepTwo ? "section-content strategy active" : "section-content strategy"}>
              <h2>SELECT PLACES YOU LOVE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque justo, consequat non fermentum ac, tempor eu turpis. Proin
                nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
                in dapibus lorem. Suspendisse vitae velit ac ante consequat
                placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
                consequat eu. Praesent pulvinar tincidunt leo et condimentum.
                Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
                odio, venenatis at ex a, lacinia suscipit orci.
            </p>
            </div>

            <div
              className={stepThree ? "section-content creative active" : "section-content creative"}>
              <h2>CONTACT WITH LANDLORD</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque justo, consequat non fermentum ac, tempor eu turpis. Proin
                nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
                in dapibus lorem. Suspendisse vitae velit ac ante consequat
                placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
                consequat eu. Praesent pulvinar tincidunt leo et condimentum.
                Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
                odio, venenatis at ex a, lacinia suscipit orci.
            </p>
            </div>

            <div
              className={stepFour ? "section-content production active" : "section-content production"}>
              <h2>MAKE AN APPOINTMENT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque justo, consequat non fermentum ac, tempor eu turpis. Proin
                nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
                in dapibus lorem. Suspendisse vitae velit ac ante consequat
                placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
                consequat eu. Praesent pulvinar tincidunt leo et condimentum.
                Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
                odio, venenatis at ex a, lacinia suscipit orci.
            </p>
            </div>

            <div
              className={stepFive ? "section-content analysis active" : "section-content analysis"}>
              <h2>READY TO MOVE IN</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque justo, consequat non fermentum ac, tempor eu turpis. Proin
                nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
                in dapibus lorem. Suspendisse vitae velit ac ante consequat
                placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
                consequat eu. Praesent pulvinar tincidunt leo et condimentum.
                Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
                odio, venenatis at ex a, lacinia suscipit orci.
            </p>
            </div>
          </div>
        </div>
      </section >
    )
  }
}
export default Process