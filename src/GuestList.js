import React from 'react'
import "./css/style.css"
import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = props => {
  return (
    <ul>
      {props.guests.map((guest, i) =>
        <Guest guest={guest} index={i}></Guest>
      )}
      
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired
}

export default GuestList;