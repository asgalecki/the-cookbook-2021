import React from 'react';

const PasswordInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.givenName} aria-label='required'>{ props.children }</label>
      <input
        type='password'
        className='form-control' 
        name={props.givenName} 
        id={props.givenName}
        minLength='6'
        maxLength='20'
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default PasswordInput;