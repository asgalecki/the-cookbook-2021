import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StaticWrapper from '../components/StaticWrapper';

const Sitemap = (props) => {

  const { auth } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
   });

  return (
    <StaticWrapper title={'Sitemap'}>
      <ul  className='ml-4'>
        <li><Link to={'/'}>Main page</Link></li>
        <li><Link to={'/recipes'}>Categories:</Link></li>
        <ul className='my-2 ml-4'>
          <li><Link to={'/recipes/beef'}>Beef</Link></li>
          <li><Link to={'/recipes/breakfast'}>Breakfast</Link></li>
          <li><Link to={'/recipes/chicken'}>Chicken</Link></li>
          <li><Link to={'/recipes/dessert'}>Dessert</Link></li>
          <li><Link to={'/recipes/goat'}>Goat</Link></li>
          <li><Link to={'/recipes/lamb'}>Lamb</Link></li>
          <li><Link to={'/recipes/miscellaneous'}>Miscellaneous</Link></li>
          <li><Link to={'/recipes/pasta'}>Pasta</Link></li>
          <li><Link to={'/recipes/pork'}>Pork</Link></li>
          <li><Link to={'/recipes/seafood'}>Seafood</Link></li>
          <li><Link to={'/recipes/side'}>Side</Link></li>
          <li><Link to={'/recipes/starter'}>Starter</Link></li>
          <li><Link to={'/recipes/vegan'}>Vegan</Link></li>
          <li><Link to={'/recipes/vegetarian'}>Vegetarian</Link></li>
        </ul>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/terms'}>Terms of use</Link></li>
        <li><Link to={'/privacy'}>Privacy</Link></li>
        <li><Link to={'/sitemap'}>Sitemap</Link></li>

        <li className='my-2'>User:</li>

        {!auth.uid ?
          <ul className='my-2 ml-4'>
            <li><Link to={'/signin'}>Sign in</Link></li>
            <li><Link to={'/signup'}>Sign up</Link></li>
            <li><Link to={'/resetpassword'}>Reset password</Link></li>
          </ul>
        :
          <ul className='my-2 ml-4'>
            <li><Link to={'/add'}>Add recipe</Link></li>
            <li><Link to={'/myrecipes'}>My recipes</Link></li>
            <li><Link to={'/settings'}>Settings</Link></li>
          </ul>
        }
      </ul>
    </StaticWrapper>
  )
};

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(connect(mapStatetoProps))(Sitemap);