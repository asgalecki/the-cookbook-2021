import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <div className='navbar-text ml-auto mr-5'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-5'>
          <li className='nav-item dropdown'>
            <Link to={'#'} className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true'   aria-expanded='false'>
              {props.profile.nickName}
            </Link>
            <div className='dropdown-menu bg-dark' aria-labelledby='navbarDropdownMenuLink'>
              <Link to='/add' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>Add recipe</Link>
              <Link to='/myrecipes' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>My recipes</Link>
              <Link to='/settings' data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>Settings</Link>
              <Link to='#' onClick={props.signOut} data-toggle='collapse' data-target='.navbar-collapse.show' className='nav-link'>Log Out</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);