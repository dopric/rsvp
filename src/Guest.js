import React from 'react'
import PropTypes from 'prop-types'
import GuestName from './GuestName'
import './css/style.css'

const Guest = props =>{

    return(

        <li className="responded">
         <GuestName 
         isEditing={props.isEditing} 
         nameTest={props.name}
         handleNameEdit={e=> props.setName(e.target.value)}>
           {props.name}
         </GuestName>
        <label>
          <input type="checkbox" checked={props.isConfirmed} 
          onChange={props.handleConfirm}
          /> 
          {props.isConfirmed? 'Confirmed' : 'Not confirmed' }
            </label>
        <button onClick={props.handleEditing}>
          
           {props.isEditing?'save': 'edit'}</button>
        <button onClick={props.handleRemove}>remove</button>
      </li>
    )
}

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
}


export default Guest;
