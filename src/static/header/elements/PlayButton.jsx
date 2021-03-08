import React from 'react';
import { PlayFill } from 'react-bootstrap-icons';

class PlayButton extends React.Component {
  state = {
    isVideoPlayed: false
  };

  headerVideoPlay = () => {
    const headerVideo = document.querySelector('video');

    if (!this.state.isVideoPlayed) {
      headerVideo.play();
      headerVideo.setAttribute('controls', true)
    } else {
      headerVideo.pause();
    }
  };

  handleClick = () => {
    this.setState(state => ({
      isVideoPlayed: !state.isVideoPlayed
    }));

    this.headerVideoPlay();
  };

  render() {
    
    const PlayAfterClickStyle = {
      display: 'none',
    };
    
    const PlayBeforeClickStyle = {
      position: 'absolute',
      bottom: '50%',
      right: '45%',
      left: '45%',
      zIndex: '2'
    };

    return (
      <button
        type='button'
        aria-label='Play Header Video'
        className='btn btn-outline-light'
        onClick={this.handleClick}
        style={this.state.isVideoPlayed ? PlayAfterClickStyle : PlayBeforeClickStyle}
      >
        <PlayFill />
      </button>
    );
  };
};

export default PlayButton;