import React from 'react';

const ThumbnailComponent = (props) => {

  const cardHeight = {
    minHeight: '250px',
    height: '100%'
  }
  
  const innerCardStyle = {
    position: 'absolute',
    bottom: '1%',
    left: '10%',
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderTop: '5px solid orange',
  };

  return (
    <div className='col my-4 py-4'>
      <div className='card bg-dark rounded-0' style={cardHeight}>
        <img src={props.imageSource} className='card-img img-fluid' alt='...' />
        <div className='card text-center p-1' style={innerCardStyle}>
          <div className='card-body p-1'>
            { props.children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThumbnailComponent;