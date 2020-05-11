import React from 'react'
import PropTypes from 'prop-types'
import GuestName from './GuestName'
import './css/style.css'

const Guest = props =>{
  console.log(props.isEditing, props.name)
    return(

        <li className="responded">
         <GuestName isEditing={props.isEditing} nameTest={props.name}>
           {props.name}
         </GuestName>
        <label>
          <input type="checkbox" checked={props.isConfirmed} 
          onChange={props.handleConfirm}
          /> 
          {props.isConfirmed? 'Confirmed' : 'Not confirmed' }
            </label>
        <button>edit {props.isEditing}</button>
        <button>remove</button>
      </li>
    )
}

Guest.propTypes = {
    name: PropTypes.object.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
}


export default Guest;
