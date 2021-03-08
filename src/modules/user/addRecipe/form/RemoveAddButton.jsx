import React from 'react';

const RemoveAddButton = (props) => {
  const buttonStyle = { width: '40px' };

  return (
    <button 
      className='btn btn-warning' 
      type='button' 
      style={buttonStyle}
      id={ (props.symbol === '+') ? `button-addon-${props.index}` : `button-remove-${props.index}` }
      onClick={ (props.symbol === '+') ? (e) => props.addElement(e, props.name) : (e) => props.removeElement(e, props.name) }
    >
    {props.symbol}
    </button>
  )
}

export default RemoveAddButton;
