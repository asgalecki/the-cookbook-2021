import React from 'react';
import { connect } from 'react-redux';
import { changeEmail } from '../../../../store/actions/authActions';
import EmailInput from '../../../../components/EmailInput';

class ChangeEmail extends React.Component {
  state = {
    email: '',
    repeatedEmail: '',
    emailEqual: true
  }

  handleFormElement = (name, value) => {
    this.setState({ [name]: value });
  };

  makeChange = () => {
    this.setState({ emailEqual: true });
    this.props.changeEmail(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    (this.state.email === this.state.repeatedEmail ? (
        this.makeChange()
      ) : (
        this.setState({ emailEqual: false })
      )
    )
  };

  render() {
    const { authError, emailChangeMessage } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>

        <EmailInput givenName={'email'} {...this.state.email} handleFormElement={this.handleFormElement}>
          New email: 
        </EmailInput>

        <EmailInput givenName={'repeatedEmail'} {...this.state.repeatedEmail} handleFormElement={this.handleFormElement}>
          Repeat new email: 
        </EmailInput>

        <button type='submit' className='btn btn-warning'>Confirm</button>
        <p className='mt-4 text-muted text-center'>All fields are required.</p>

        {authError ? <p className='mt-4 text-center text-warning'>{authError}</p> : null}
        {emailChangeMessage ? <p className='mt-4 text-center text-warning'>{emailChangeMessage}</p> : null}
        {this.state.emailEqual ? null : <p className='mt-4 text-center text-warning'>There is a mistake. Please try again.</p> }
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    emailChangeMessage: state.auth.emailChangeMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (newEmail) => dispatch(changeEmail(newEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);