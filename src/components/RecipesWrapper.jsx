import React from 'react';
import { Helmet } from 'react-helmet';

const RecipesWrapper = (props) => {
  
  const minSizeStyle = { minHeight: '90vh', minWidth: '70vw' };

  return (
    <main className='container d-flex justify-content-center align-items-center'>
      <Helmet>
        <title>The Cookbook - {props.title}</title>
        <meta name='description' content={props.title} />
      </Helmet>
      <section className='card my-2 p-2 border border-light rounded shadow' style={minSizeStyle}>
        <h3 className='text-uppercase my-4'>{props.title}</h3>
        {props.children}
      </section>
    </main>
  )
}

export default RecipesWrapper;