import React from 'react'
import "./css/style.css"
import PropTypes from 'prop-types'
import Guest from './Guest'
import Ghost from './Ghost'

const GuestList = props => {

  return (
    <ul>
      {props.pendingGuest ? <Ghost name={props.pendingGuest}/>: null }
      {props.guests
      .filter(guest=> !props.isFiltered || guest.isConfirmed)
      .map((guest, i) =>
        <Guest name={guest.name} isConfirmed={guest.isConfirmed} 
        inkeydex={i} handleConfirm={()=> props.toggleConfirm(i)}
        isEditing={guest.isEditing}
        key={i}
        handleEditing={()=> props.toggleEditingAt(i)}
        setName={text=>props.setNameAt(text, i)}
        handleRemove={()=>props.handleRemove(i)}></Guest>
      )}
      
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;