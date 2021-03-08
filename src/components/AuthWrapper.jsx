import React from 'react';
import { Helmet } from 'react-helmet';

const AuthWrapper = (props) => {

  const minHeightStyle = { minHeight: '90vh' };

  return (
    <main className='container d-flex justify-content-center align-items-center' style={minHeightStyle}>
      <Helmet>
        <title>The Cookbook - {props.title}</title>
      </Helmet>
      <div className='mx-auto card col-12 col-md-10 my-4 p-2 border border-light rounded shadow'>
        <h3 className='text-uppercase my-4'>{props.title}</h3>
        { props.children }
      </div>
    </main>
  )
}

export default AuthWrapper;