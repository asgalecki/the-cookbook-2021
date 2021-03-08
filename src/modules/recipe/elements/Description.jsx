import React from 'react';
import moment from 'moment';

const Description = (props) => {
  return (
    <div>
      <img src={props.source} className='img-fluid my-4' alt='...' />
      {props.created && props.author ? <p className='text-left'>Author: {props.author}, {moment(props.created.toDate()).calendar()}</p> : null}
      <p className='text-left'>{props.category} - {props.area}</p>
    </div>
  )
}

export default Description;