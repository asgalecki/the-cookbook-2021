const initState = {
  authError: null,
  emailChangeMessage: null,
  passwordChangeMessage: null,
  passwordResetMessage: null
};

const authReducer = ( state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      // console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'SIGNOUT_SUCCESS':
      // console.log('signout success');
      return state;
    case 'SIGNUP_SUCCESS':
      // console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      // console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    case 'USER_DELETE_SUCCESS':
      // console.log('user deleted successfully');
      return {
        ...state,
        authError: null
      }
    case 'USER_DELETE_ERROR':
      // console.log('user delete error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'EMAIL_CHANGE_SUCCESS':
      // console.log('email changed successfully');
      return {
        ...state,
        emailChangeMessage: 'Email changed successfully!',
        authError: null
      }
    case 'EMAIL_CHANGE_ERROR':
      // console.log('email change error');
      return {
        ...state,
        authError: 'Email change failed!'
      }
    case 'PASSWORD_CHANGE_SUCCESS':
      // console.log('password change success');
      return {
        ...state,
        passwordChangeMessage: 'Password changed successfully!',
        authError: null
      }
    case 'PASSWORD_CHANGE_ERROR':
      // console.log('password change error');
      return {
        ...state,
        authError: 'Password change failed!'
      }
    case 'PASSWORD_RESET_SUCCESS':
      // console.log('password reset success');
      return {
        ...state,
        passwordResetMessage: 'Check your email!',
        authError: null
      }
    case 'PASSWORD_RESET_ERROR':
      // console.log('password change error');
      return {
        ...state,
        authError: 'Password reset failed!'
      }
    default:
      return state;
  }
};

export default authReducer;