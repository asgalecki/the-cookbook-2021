import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { recaptchaKey } from '../../../../config/recaptchaConfig';

import mailChimpMessage from '../../../../helpers/mailChimpMessage';

const recaptchaRef = React.createRef();
const buttonRef = React.createRef();

class NewsletterForm extends React.Component {
  state = {
    email: '',
    isValidated: false
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isValidated === false) {
      recaptchaRef.current.execute();
    } else {
      this.state.email.indexOf('@') > -1 &&
      this.props.onValidated({
        EMAIL: this.state.email
      });
    }
  };

  recaptchaValidation = (value) => {
    if (value) {
      this.setState({
        isValidated: true
      });
      buttonRef.current.click();
    }
  };

  render() {

    const { status } = this.props;

    return (
      <div className='text-center'>
        <div className='form-group text-left'>
          <label htmlFor='newsletterEmail'>Email<span aria-label='required'>*</span>: </label>
          <input
            type='email'
            className='form-control'
            name='email' 
            id='newsletterEmail'
            minLength='6'
            maxLength='50'
            required
            value={this.state.email}
            onChange={this.handleInputChange}
            aria-describedby='emailHelp'
          />
          <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
        </div>
        <button 
          type='submit' 
          className='btn btn-warning text-uppercase'
          ref={buttonRef}
          onClick={this.handleSubmit} 
          disabled={status === 'sending' || status === 'success'}
        >
          Subscribe
        </button>
        
        { status ? <p className='my-4 text-warning text-center'>{mailChimpMessage(status)}</p> : null }

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          size='invisible'
          badge='bottomleft'
          onChange={this.recaptchaValidation}
        />
      </div>
    )
  }
}

export default NewsletterForm;