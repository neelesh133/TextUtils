import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {

    const capitalize =(word)=>{
        let wrd = word.toLowerCase();
        return wrd.charAt(0).toUpperCase() + wrd.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
     </div>
  )
}
