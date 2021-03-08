import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import ResetPasswordForm from './form/ResetPasswordForm';
import AuthWrapper from '../../../components/AuthWrapper';

const ResetPassword = ({ auth }) => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  });

  if (auth.uid) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <AuthWrapper title={'Reset Password'}>
        <ResetPasswordForm />
      </AuthWrapper>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStatetoProps))(ResetPassword);