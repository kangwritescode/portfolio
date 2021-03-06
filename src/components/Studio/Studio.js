import React, { useState, useEffect } from 'react'
import './Studio.css'
import NavBar from '../NavBar/Navbar/NavBar'
import Arrow from '../Arrow/Arrow'
import Filter from '../Filter/Filter'
import { STUDIO_DATA } from './StudioData/StudioData'
import Concept from './Concept/Concept'

const Studio = props => {
  const [selectedFilter, setSelectedFilter] = useState('SHOW ALL')
  const options = [
    'SHOW ALL',
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'Interview'
  ]

  const setFilter = option => {
    setSelectedFilter(option)
  }

  const filteredData = [...STUDIO_DATA].filter(concept =>
    concept.tags.includes(selectedFilter)
  )

  return (
    <React.Fragment>
      <NavBar />
      <div className={`studio`}>
        <Arrow url='/portfolio' direction='left' text='portfolio' />
        <Arrow url='/contact' direction='right' text='contact ' />
        <h1>web dev studio</h1>
        <h6 className='sub-header'>a collection of crucial concepts.</h6>
        <Filter
          selectedFilter={selectedFilter}
          options={options}
          setFilter={setFilter}
        ></Filter>
        <label className='studio__concept-count-label'>
          Showing {filteredData.length} concept
          {filteredData.length === 1 ? null : 's'} filtered by the{' '}
          {selectedFilter} tag.
        </label>
        {filteredData.map(({ header, icon, color, body }) => {
          return (
            <Concept header={header} icon={icon} color={color} body={body} />
          )
        })}
        <script src='https://gist.github.com/kangwritescode/38eea6b5c8fc2b9de10792ab346d6c1a.js'></script>
      </div>
    </React.Fragment>
  )
}

export default Studio
