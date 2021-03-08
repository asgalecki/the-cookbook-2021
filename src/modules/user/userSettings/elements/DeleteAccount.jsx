import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteUser, signOut } from '../../../../store/actions/authActions';

const DeleteAccount = (props) => {
  const removeUser = e => {
    props.deleteUser(props.auth.uid);
  };

  if (!props.auth.uid) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div className='mt-1 text-left'>
        <p>Do you want to delete your account?</p>
        <p className='text-muted'>Deleted account cannot be restored.</p>
        <button onClick={removeUser} className='btn btn-warning'>Confirm</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (currentUser) => dispatch(deleteUser(currentUser)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(DeleteAccount);