import React, { Component } from "react"
import backgroundImage from "../../assets/background.png"
import "../styles/pages/index.scss"
export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <img src={backgroundImage} alt="Background Image" />
        <div className='header'>
          <div>Hi, I'm Danish ;)</div>
        </div>
        
      </div>
    )
  }
}
