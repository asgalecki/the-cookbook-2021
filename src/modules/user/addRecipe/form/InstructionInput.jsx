import React from 'react';

const InstructionInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor='strInstructions'>Instructions <span aria-label='required'>*</span>: </label>
      <textarea
        className='form-control'
        id='strInstructions'
        rows='5'
        name='strInstructions'
        maxLength='5000'
        required
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default InstructionInput;