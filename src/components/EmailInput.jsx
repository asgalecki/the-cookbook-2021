import React from 'react';

const EmailInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.givenName} aria-label='required'>{ props.children }</label>
      <input
        type='email' 
        className='form-control' 
        name={props.givenName} 
        id={props.givenName}
        minLength='6'
        maxLength='50'
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default EmailInput;