import React from 'react';

const Instructions = ({ instructions }) => {

  const preWrap = {
    whiteSpace: 'pre-wrap'
  };

  return (
    <div className='my-2'>
      <h5 className='text-uppercase my-2'>Instructions</h5>
      <p className='text-left' style={preWrap}>{instructions}</p>
    </div>
  )
}

export default Instructions;