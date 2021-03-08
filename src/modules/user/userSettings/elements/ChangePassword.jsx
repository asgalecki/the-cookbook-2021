import React from 'react';
import { connect } from 'react-redux';
import { changePassword } from '../../../../store/actions/authActions';
import PasswordInput from '../../../../components/PasswordInput';

class ChangePassword extends React.Component {
  state = {
    password: '',
    repeatedPassword: '',
    passwordEqual: true
  }

  handleFormElement = (name, value) => {
    this.setState({ [name]: value });
  };

  makeChange = () => {
    this.setState({ passwordEqual: true });
    this.props.changePassword(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    (this.state.password === this.state.repeatedPassword ? (
        this.makeChange()
      ) : (
        this.setState({ passwordEqual: false })
      )
    )
  };

  render() {
    const { authError, passwordChangeMessage } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>

        <PasswordInput givenName={'password'} {...this.state.password} handleFormElement={this.handleFormElement}>
          New password: 
        </PasswordInput>

        <PasswordInput givenName={'repeatedPassword'} {...this.state.repeatedPassword} handleFormElement={this.handleFormElement}>
          Repeat new password: 
        </PasswordInput>

        <button type='submit' className='btn btn-warning'>Confirm</button>
        <p className='mt-4 text-muted text-center'>All fields are required.</p>

        {authError ? <p className='mt-4 text-center text-warning'>{authError}</p> : null}
        {passwordChangeMessage ? <p className='mt-4 text-center text-warning'>{passwordChangeMessage}</p> : null}
        {this.state.passwordEqual ? null : <p className='mt-4 text-center text-warning'>There is a mistake. Please try again.</p> }

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    passwordChangeMessage: state.auth.passwordChangeMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (newPassword) => dispatch(changePassword(newPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);