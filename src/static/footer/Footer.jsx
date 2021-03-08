import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-light bg-light justify-content-between mt-4 border-top border-warning'>
      <span className='navbar-text'>Created by <a href='https://github.com/asgalecki' target='_blank' rel='noopener noreferrer'>Artur Gałecki</a> | 2021</span>
      <div>
        <ul className='navbar-nav d-flex flex-column flex-md-row mr-5'>

          <li className='nav-item mr-2'>
            <Link to='/terms' className='nav-link'>Terms of use</Link>
          </li>

          <li className='nav-item mr-2'>
            <Link to='/privacy' className='nav-link'>Privacy</Link>
          </li>

          <li className='nav-item mr-2'>
            <Link to='/sitemap' className='nav-link'>Sitemap</Link>
          </li>

          <li className='nav-item mr-2'>
            <Link to='/contact' className='nav-link'>Contact us</Link>
          </li>

        </ul>
      </div>
    </div>
  )
};

export default Footer;