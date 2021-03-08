import React from 'react';

const ImageInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor='strMealThumb'>Image: </label>
      <input
        type='text'
        className='form-control'
        name='strMealThumb'
        id='strMealThumb'
        placeholder='http://'
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default ImageInput;