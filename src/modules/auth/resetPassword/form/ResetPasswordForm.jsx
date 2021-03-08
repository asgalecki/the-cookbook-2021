import React from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { recaptchaKey } from '../../../../config/recaptchaConfig';
import { resetPassword } from '../../../../store/actions/authActions';
import EmailInput from '../../../../components/EmailInput';

const recaptchaRef = React.createRef();
const buttonRef = React.createRef();

class ResetPasswordForm extends React.Component {
  state = {
    email: '',
    isValidated: false
  }

  handleFormElement = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isValidated === false) {
      recaptchaRef.current.execute();
    } else {
      this.props.resetPassword(this.state);
    } 
  };

  recaptchaValidation = (value) => {
    if (value) {
      this.setState({
        isValidated: true
      });
      buttonRef.current.click();
    }
  }

  render() {

    const { authError, passwordResetMessage } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>

        <EmailInput givenName={'email'} {...this.state.email} handleFormElement={this.handleFormElement}>
          Email: 
        </EmailInput>

        <button type='submit' ref={buttonRef} className='btn btn-warning'>Send</button>

        {authError ? <p className='mt-4 text-center text-warning'>{authError}</p> : null}
        {passwordResetMessage ? <p className='mt-4 text-center text-warning'>{passwordResetMessage}</p> : null}

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          size='invisible'
          onChange={this.recaptchaValidation}
          badge='bottomleft'
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    passwordResetMessage: state.auth.passwordResetMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (userEmail) => dispatch(resetPassword(userEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);