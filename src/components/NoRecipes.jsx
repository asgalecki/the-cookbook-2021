import React from 'react';
import { Helmet } from 'react-helmet';

const NoRecipes = (props) => {

  const minHeightStyle = { minHeight: '90vh' };

  return (
    <main className='container d-flex justify-content-center align-items-center' style={minHeightStyle}>
      <Helmet>
        <title>The Cookbook - Page not found.</title>
      </Helmet>
      <div className='row'>
        <h3 className='text-center'>{ props.children }</h3>
      </div>
    </main>
  )
}

export default NoRecipes;