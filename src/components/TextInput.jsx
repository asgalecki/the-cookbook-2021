import React from 'react';

const TextInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.givenName} aria-label='required'>{ props.children }</label>
      <input
        type='text' 
        className='form-control' 
        name={props.givenName} 
        id={props.givenName}
        minLength='2'
        maxLength={props.maxLength ? props.maxLength : '30'}
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default TextInput;