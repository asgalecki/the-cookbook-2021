import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../../../store/actions/authActions';
import ReCAPTCHA from 'react-google-recaptcha';
import { recaptchaKey } from '../../../../config/recaptchaConfig';
import EmailInput from '../../../../components/EmailInput';
import PasswordInput from '../../../../components/PasswordInput';

const recaptchaRef = React.createRef();
const buttonRef = React.createRef();

class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
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
      this.props.signIn(this.state);
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
    const { authError } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>

        <EmailInput givenName={'email'} {...this.state.email} handleFormElement={this.handleFormElement}>
          Email: 
        </EmailInput>

        <PasswordInput givenName={'password'} {...this.state.password} handleFormElement={this.handleFormElement}>
          Password: 
        </PasswordInput>

        <button type='submit' ref={buttonRef} className='btn btn-warning'>Sign In</button>
        <p className='my-4 text-muted text-center'>All fields are required.</p>
        
        {authError ? <p className='my-4 text-center text-warning'>{authError}</p> : null}

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          size='invisible'
          onChange={this.recaptchaValidation}
          badge='bottomleft'
        />
        
        <div className='d-flex'>
          <Link to={'/signup'}>Create account</Link>
          <span className='mx-2'>|</span>
          <Link to={'/resetpassword'}>Reset password</Link>
        </div>

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);