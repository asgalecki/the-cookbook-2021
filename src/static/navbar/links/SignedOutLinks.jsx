import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div className='navbar-text ml-auto mr-5'>
      <Link to='/signin' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-item'>Sign in</Link> 
      <span> / </span>
      <Link to='/signup' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-item'>Sign up</Link>
    </div>
  )
}

export default SignedOutLinks;