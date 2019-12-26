import React, { useState, useEffect } from 'react'
import './Logos.css'
import fb from '../../assets/fb.png'
import octocat from '../../assets/octocat.png'
import linkedIn from '../../assets/linkedin.png'
import ig from '../../assets/instagram.png'

const Logos = props => {
  const iconLinks = [
    { url: fb, delay: '3.9s', href: 'https://www.facebook.com/david.kang.75' },
    {
      url: octocat,
      delay: '3.95s',
      href: 'https://github.com/kangwritescode/'
    },
    {
      url: linkedIn,
      delay: '4s',
      href: 'https://www.linkedin.com/in/davidhjkang/'
    },
    { url: ig, delay: '4.05s', href: 'https://www.instagram.com/ajiashi/' }
  ]

  const openLink = url => {
    window.open(url)
  }

  return (
    <div className='container'>
      {iconLinks.map(link => {
        return (
          <img
            className='link'
            alt=''
            src={link.url}
            onClick={() => openLink(link.href)}
            style={{
              animation: `pop-in-right .15s ease-in-out ${link.delay} forwards`
            }}
          ></img>
        )
      })}
    </div>
  )
}

export default Logos
