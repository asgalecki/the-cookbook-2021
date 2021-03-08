import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ChangeEmail from './elements/ChangeEmail';
import ChangePassword from './elements/ChangePassword';
import DeleteAccount from './elements/DeleteAccount';

const minHeightStyle = { minHeight: '90vh' };

const Settings = (props) => {
  const { auth, history } = props;

  if (!auth.uid) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <main className='container d-flex justify-content-center align-items-center' style={minHeightStyle}>
        <Helmet>
          <title>The Cookbook - User Account Settings</title>
        </Helmet>
        <div className='mx-auto card my-4 p-2 border border-light rounded shadow col-12'>
          <h3 className='text-uppercase my-4'>Settings: </h3>
          <div className='row'>
            <div className='col-12 col-md-4 my-2'>
              <div className='list-group' id='list-tab' role='tablist'>
                <a className='list-group-item list-group-item-action active' id='list-change-mail-list' data-toggle='list' href='#list-change-mail' role='tab' aria-controls='change-email'>
                  Change e-mail
                </a>
                <a className='list-group-item list-group-item-action' id='list-change-password-list' data-toggle='list' href='#list-change-password' role='tab' aria-controls='change-password'>
                  Change password
                </a>
                <a className='list-group-item list-group-item-action' id='list-delete-list' data-toggle='list' href='#list-delete' role='tab' aria-controls='delete'>
                  Delete
                </a>
              </div>
            </div>
            <div className='col-12 col-md-8'>
              <div className='tab-content' id='nav-tabContent'>
                <div className='tab-pane fade show active' id='list-change-mail' role='tabpanel' aria-labelledby='list-change-mail-list'>
                  <ChangeEmail auth={auth} />
                </div>
                <div className='tab-pane fade' id='list-change-password' role='tabpanel' aria-labelledby='list-change-password-list'>
                  <ChangePassword auth={auth} />
                </div>
                <div className='tab-pane fade' id='list-delete' role='tabpanel' aria-labelledby='list-delete-list'>
                  <DeleteAccount auth={auth} history={history} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStatetoProps))(Settings);