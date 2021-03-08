import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../static/header/Header';
import Main from '../static/main/Main';
import Aside from '../static/aside/Aside';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
   });
   
  return (
    <div>
      <Helmet>
        <title>The Cookbook</title>
        <meta name='description' content='The Cookbook is a simple cooking recipe portal.' />
      </Helmet>
      <Header />
      <div className='container d-flex col-12'>
        <div className='row'>
          <Main />
          <Aside />
        </div>
      </div>
    </div>
  )
};

export default Home;