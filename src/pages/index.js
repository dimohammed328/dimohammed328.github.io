import React, { Component } from 'react';
import { Link } from 'gatsby';
import backgroundImage from '../../assets/background.png';
import '../styles/pages/index.scss';
export default class Home extends Component {
  componentDidMount() {
    window.onload = () => console.log('hello', Date.now());
  }
  
  render() {
    return (
      <div className='main'>
        <div className='navbar'>
          <Link className='link' to='/blog'>Blog</Link>
          <Link className='link' to='/projects'>Projects</Link>
        </div>
        <img src={backgroundImage} alt='Background Image' />
        <div className='header'>
          <div>Hi, I'm Danish ;)</div>
        </div>
        <div className='bio'>
          <div>
            I am a soon-to-be graduate in computer science who likes making cool
            things like this website
          </div>
        </div>
      </div>
    );
  }
}
