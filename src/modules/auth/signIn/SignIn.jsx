import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import SignInForm from './form/SignInForm';
import AuthWrapper from '../../../components/AuthWrapper';

const SignIn = ({ auth }) => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  });
  
  if (auth.uid) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <AuthWrapper title={'Sign In'}>
        <SignInForm />
      </AuthWrapper>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStatetoProps))(SignIn);