import React, { useEffect } from 'react';
import StaticWrapper from '../components/StaticWrapper';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
   });

  return (
    <StaticWrapper title={'About'}>
      <p>The Cookbook is a simple cooking recipe portal.</p>
    </StaticWrapper>
  )
};

export default About;