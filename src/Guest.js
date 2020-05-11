import React from 'react'
import PropTypes from 'prop-types'

import './css/style.css'

const Guest = props =>{
    return(

        <li className="responded">
            <span>{props.name}</span>
        <label>
          <input type="checkbox" checked={props.isConfirmed} 
          onChange={props.handleConfirm}
          /> 
          {props.isConfirmed? 'Confirmed' : 'Not confirmed' }
            </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    )
}

Guest.propTypes = {
    name: PropTypes.object.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleConfirm: PropTypes.func.isRequired
}


export default Guest;
