import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeTop = (props) => {
  return (
    <section className={props.className}>
      <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Welcome</h5>
      <div className='card'>
        <img src='https://unsplash.com/photos/DdglEoIC2y4/download?force=true&w=640' class='card-img-top' alt='...' />
        <div className='card-body text-center'>
          <h5 className='card-title'>Hello!</h5>
          <p className='card-text'>It's nice to meet you here...</p>
          <Link to={'/about'}>
            <button className='btn btn-warning'>
              About us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default WelcomeTop;