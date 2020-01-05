/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Landing.css'
import head from '../../assets/head.png'
import Logos from '../Logos/Logos'
import Thoughts from '../Thoughts/Thoughts'
import NavBar from '../NavBar/Navbar/NavBar'
import RightArrow from '../RightArrow/RightArrow'
import { AwesomeButton } from 'react-awesome-button'

const Landing = props => {
  return (
    <React.Fragment>
      <RightArrow url='?' text='portfolio' />
      <div className='landing'>
        <div className={`thoughts-container`}>
          <Thoughts />
        </div>
        <img className='landing__head' src={head} alt='hi' />
        <h1 id='landing-header'>Hi there, I'm David Kang.</h1>
        <h6 id='landing-subtext'>
          I'm a recent{' '}
          <a
            className='underline--magical--bears'
            target='_blank'
            href='https://drive.google.com/open?id=1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl'
          >
            UC Berkeley graduate
          </a>{' '}
          and Web Developer. <br />
          Articles, labs, and more can be found in the{' '}
          <a className='underline--magical'>code laboratory.</a> <br />
          You can find internet things I've made on the{' '}
          <a className='underline--magical'>portfolio page.</a> <br />
          Best reached any time at{' '}
          <a className='underline--magical'>davidhjkang@berkeley.edu.</a>
        </h6>
      </div>
      <Logos />
    </React.Fragment>
  )
}

export default Landing
