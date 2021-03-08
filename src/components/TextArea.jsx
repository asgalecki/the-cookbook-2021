import React from 'react';

const TextInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.givenName} aria-label='required'>{ props.children }</label>
      <textarea
        type='text' 
        className='form-control'
        rows='5' 
        name={props.givenName} 
        id={props.givenName}
        minLength='2'
        maxLength='1000'
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default TextInput;