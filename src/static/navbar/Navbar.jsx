import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SignedInLinks from './links/SignedInLinks';
import SignedOutLinks from './links/SignedOutLinks';

const Navbar = (props) => {
  const { auth, profile } = props;

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>

      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>

      <Link to='/' data-toggle='collapse' data-target='.navbar-collapse.show' className='navbar-brand'>The Cookbook</Link>

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>

          <li className='nav-item'>
            <Link to='/recipes' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>Recipes</Link>
          </li>

          <li className='nav-item dropdown'>
            <Link to={'#'} className='nav-link dropdown-toggle' id='navbarDropdownSearch' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Search
            </Link>
            <SearchBar />
          </li>

          <li className='nav-item'>
            <Link to='/contact' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>Contact</Link>
          </li>

        </ul>

        { auth.uid ? <SignedInLinks auth={auth} profile={profile} /> : <SignedOutLinks /> };

      </div>
    </nav>
  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);