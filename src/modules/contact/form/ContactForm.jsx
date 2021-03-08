import React from 'react';
import emailjs from 'emailjs-com';
import { templateId, serviceId, userId } from '../../../config/emailjsConfig';
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaKey } from '../../../config/recaptchaConfig';

import EmailInput from '../../../components/EmailInput';
import TextInput from '../../../components/TextInput';
import TextArea from '../../../components/TextArea';

const recaptchaRef = React.createRef();

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isValidated: false,
    displayMessage: false
  };

  handleFormElement = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const variables = {
      from_name: this.state.name,
      from_email: this.state.email,
      subject: this.state.subject,
      message_html: this.state.message
    };

    if (this.state.isValidated === false) {
      recaptchaRef.current.execute();
    } else {
      emailjs.send(serviceId, templateId, variables, userId
      ).then(res => {
        // console.log('Email successfully sent!');
        this.setState({
          displayMessage: true
        });
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  };

  recaptchaValidation = (value) => {
    if (value) {
      this.setState({
        isValidated: value,
        displayAlert: false
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <TextInput givenName={'name'} maxLength={'50'} {...this.state.name} handleFormElement={this.handleFormElement}>
          Name: 
        </TextInput>

        <EmailInput givenName={'email'} {...this.state.email} handleFormElement={this.handleFormElement}>
          Email: 
        </EmailInput>

        <TextInput givenName={'subject'} maxLength={'80'} {...this.state.subject} handleFormElement={this.handleFormElement}>
          Subject: 
        </TextInput>

        <TextArea givenName={'message'} {...this.state.message} handleFormElement={this.handleFormElement}>
          Message:
        </TextArea>

        <button type='submit' className='btn btn-warning'>Send</button>
        <p className='my-4 text-muted text-center'>All fields are required.</p>

        { this.state.displayMessage ? <p className='my-4 text-warning text-center'>Your message has been sent successfully.</p> : null }

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          size='invisible'
          onChange={this.recaptchaValidation}
          badge='bottomleft'
        />

      </form>
    )
  };
};

export default ContactForm;