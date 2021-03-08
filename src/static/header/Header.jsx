import React from 'react';
import Video from './elements/Video';
import PlayButton from './elements/PlayButton';

const jumbotronStyle = {
  position: 'relative',
  overflow: 'hidden',
  background: 'rgba(0,0,0,1)',
};

const Header = () => {
  return (
    <header className='jumbotron-fluid mb-4' style={jumbotronStyle}>
      <PlayButton />
      <Video />
    </header>
  )
};

export default Header;