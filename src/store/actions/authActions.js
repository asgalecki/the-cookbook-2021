export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    })
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        nickName: newUser.nickName
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
};

export const deleteUser = (currentUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const firebaseUser = firebase.auth().currentUser;
    const firestoreUser = firestore.collection('users').doc(currentUser);

    firestoreUser.delete().then(() => {
      firebaseUser.delete()
    }).then(() => {
      dispatch({ type: 'USER_DELETE_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'USER_DELETE_ERROR', err})
    })
  }
}

export const changeEmail = (newEmail, currentUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();

    const firebaseUser = firebase.auth().currentUser;

    firebaseUser.updateEmail(newEmail.email).then(() => {
      dispatch({ type: 'EMAIL_CHANGE_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'EMAIL_CHANGE_ERROR', err})
    })
  }
};

export const changePassword = (newPassword, currentUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();

    const firebaseUser = firebase.auth().currentUser;

    firebaseUser.updatePassword(newPassword.password).then(() => {
      dispatch({ type: 'PASSWORD_CHANGE_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'PASSWORD_CHANGE_ERROR', err})
    })
  }
};

export const resetPassword = (userEmail) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    const firebaseUser = firebase.auth()

    firebaseUser.sendPasswordResetEmail(userEmail.email).then(() => {
      dispatch({ type: 'PASSWORD_RESET_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'PASSWORD_RESET_ERROR', err})
    })
  }
};