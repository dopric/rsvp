

import React from 'react'
import PropTypes from 'prop-types'

const Ghost = props =>{
    return (
        <li className="pending">
            <span>{props.name}</span>
        </li>
    )
}


Ghost.propTypes = {
    name: PropTypes.string.isRequired
}
export default Ghost;