import React from 'react'
import "./css/style.css"
import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = props => {
  return (
    <ul>
      {props.guests.map((guest, i) =>
        <Guest name={guest.name} isConfirmed={guest.isConfirmed} 
        inkeydex={i} handleConfirm={()=> props.toggleConfirm(i)}></Guest>
      )}
      
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirm: PropTypes.func.isRequired
}

export default GuestList;