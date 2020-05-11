import React from 'react'
import PropTypes from 'prop-types'



const GuestName= props => {

    if(props.isEditing){
        return  (
        <input type="text" value={props.children}
        
        onChange={props.handleNameEdit}></input>
        )
    }else{
            return(
                <span>{props.children}</span>
            )
        }
}

GuestName.propTypes ={
    isEditing: PropTypes.bool.isRequired,
    nameTest: PropTypes.string.isRequired,
    handleNameEdit: PropTypes.func.isRequired
}
export default GuestName;
