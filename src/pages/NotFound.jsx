import React, { useEffect } from 'react';

const minHeightStyle = { minHeight: '90vh' };

const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
   });

  return (
    <main className='container d-flex flex-column justify-content-center align-items-center' style={minHeightStyle}>
      <h1 className='row text-uppercase my-4 text-warning'>404</h1>
      <h6 className='row'>There is no page like this.</h6>
    </main>
  )
}

export default NotFound;