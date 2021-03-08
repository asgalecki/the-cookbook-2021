import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aside from '../../../static/aside/Aside';
import AddRecipeForm from './form/AddRecipeForm';

const AddRecipe = (props) => {
  const { auth } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
   });
   
  if (!auth.uid) {
    return (
      <Redirect to='/signin' />
    )
  } else {
    return (
      <main className='container'>
        <Helmet>
          <title>The Cookbook - Add Recipe</title>
        </Helmet>
        <div className='col-12 text-left p-0'>
          <h3 className='text-uppercase my-4'>Add Recipe</h3>
        </div>
        <div className='container d-flex col-12'>
          <div className='row'>
            <section className='card col-md-8 mx-3 mx-md-0 my-2 p-2 border border-light rounded shadow'>
              <AddRecipeForm history={props.history} />
            </section>
            <Aside />
          </div>
        </div>
      </main>
    )
  }
};

const mapStatetoProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStatetoProps))(AddRecipe);