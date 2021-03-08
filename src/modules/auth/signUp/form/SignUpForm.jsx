import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../../../store/actions/authActions';
import ReCAPTCHA from 'react-google-recaptcha';
import { recaptchaKey } from '../../../../config/recaptchaConfig';
import TextInput from '../../../../components/TextInput';
import EmailInput from '../../../../components/EmailInput';
import PasswordInput from '../../../../components/PasswordInput';

const recaptchaRef = React.createRef();
const buttonRef = React.createRef();

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    nickName: '',
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
      this.props.signUp(this.state);
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
        
        <TextInput givenName={'nickName'} {...this.state.nickName} handleFormElement={this.handleFormElement}>
          Nickname:  
        </TextInput>

        <button type='submit' ref={buttonRef} className='btn btn-warning'>Sign Up</button>
        <p className='my-4 text-muted text-center'>All fields are required.</p>
        {authError ? <p className='my-4 text-center text-warning'>{authError}</p> : null}

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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);