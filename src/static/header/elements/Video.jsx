import React from 'react';

const jumbotronVideoStyle = {
  width: '100%',
  maxHeight: '50vh',
  objectFit: 'cover',
  opacity: '1',
};

const Video = () => {
  return(
    <video style={jumbotronVideoStyle} poster='https://unsplash.com/photos/LR559Dcst70/download?force=true&w=1920'>
      <source src='https://upload.wikimedia.org/wikipedia/commons/0/0d/Food_reel_-_Will_van_der_Vlugt.webm' type='video/webm' />
      <p className='text-center'>Your browser doesn't support HTML5 video. Here is a <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Food_reel_-_Will_van_der_Vlugt.webm'>link to the video</a> instead.</p>
    </video>
  )
};

export default Video;