/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Project.css'
import Slider from './Slider/Slider'
import ProjectButton from './ProjectButton/ProjectButton'

const Project = ({ tags, title, description, link, source, photos }) => {
  const projectButtons = [
    {
      href: link,
      className: 'live-demo',
      text: 'Live Demo',
      fontAwesome: 'fas fa-external-link-alt'
    },
    {
      href: source,
      className: 'view-source',
      text: 'View Source',
      fontAwesome: 'fab fa-github'
    }
  ]
  return (
    <section className='section'>
      <Slider photos={photos} />
      <div className={`section__info`}>
        <h3 className='section__title'>{title}</h3>
        <p className='section__description'>{description}</p>
        <div className={`section__tags`}>
          {tags.map(tag => (
            <span key={tag} className='section__tag'>
              {tag}
            </span>
          ))}
        </div>
        <div className={`section__buttons`}>
          {projectButtons.map(({ href, className, text, fontAwesome }) => (
            <ProjectButton
              key={href}
              href={href}
              className={className}
              text={text}
              fontAwesome={fontAwesome}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
