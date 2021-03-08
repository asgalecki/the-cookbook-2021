import React from 'react';
import NewsletterForm from './form/NewsletterForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const Newsletter = (props) => {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Never miss a recipe!</h5>
        <p className={props.captionClassName}>
          Subscribe to get new recipes via email.
        </p>
        <MailchimpSubscribe 
          url={'https://gmail.us1.list-manage.com/subscribe/post?u=e3027d42337857fc392227eaa&amp;id=4ce735e16e'} 
          render={ ({ subscribe, status, message }) => (
            <NewsletterForm 
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </section>
    )
};

export default Newsletter;