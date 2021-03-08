import React from 'react';
import validateYouTubeUrl from '../../../helpers/validateYouTubeUrl';

const Video = (props) => {

  const source = validateYouTubeUrl(props.source);

  return (
    <div className='my-2'>
      <h5 className='text-uppercase my-2'>Video</h5>
      <iframe 
        title={props.title} 
        width='560' 
        height='315' 
        src={source} 
        frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
        allowFullScreen 
        style={props.iframeStyle}
        sandbox
      >
      </iframe>
    </div>
  )
};

export default Video;