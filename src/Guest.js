import React from 'react'
import PropTypes from 'prop-types'

import './css/style.css'

const Guest = props =>{
    return(

        <li className="responded" key={props.index}>
            <span>{props.guest.name}</span>
        <label>
          <input type="checkbox" checked={props.guest.isConfirmed} /> 
          {props.guest.isConfirmed? 'Confirmed' : 'Not confirmed' }
            </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    )
}

Guest.propTypes = {
    guest: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}


export default Guest;
