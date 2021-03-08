import React from 'react';

const NameInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor='strMeal'>Recipe name <span  aria-label='required'>*</span>: </label>
      <input
        type='text'
        className='form-control'
        name='strMeal'
        id='strMeal'
        minLength='2'
        maxLength='50'
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default NameInput;