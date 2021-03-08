import React from 'react';

const VideoInput = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor='strYoutube'>Video: </label>
      <input
        type='text'
        className='form-control'
        name='strYoutube'
        id='strYoutube'
        placeholder='http://www.youtube.com'
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      />
    </div>
  )
}

export default VideoInput;