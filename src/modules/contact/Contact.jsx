import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Aside from '../../static/aside/Aside';
import ContactForm from './form/ContactForm';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
   });
   
  return (
    <main className='container'>
      <Helmet>
        <title>The Cookbook - Contact us</title>
      </Helmet>
      <div className='col-12 text-left p-0'>
        <h3 className='text-uppercase my-4'>Contact Us</h3>
      </div>
      <div className='container d-flex col-12'>
        <div className='row'>
          <section className='card col-md-8 mx-3 mx-md-0 my-2 p-2 border border-light rounded shadow'>
            <ContactForm />
          </section>
          <Aside />
        </div>
      </div>
    </main>
  )
};

export default Contact;