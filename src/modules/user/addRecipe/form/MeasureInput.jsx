import React from 'react';
import RemoveAddButton from './RemoveAddButton';

const MeasureInput = (props) => {
  const name = 'strMeasure';

  return (
    <div className='form-group'>
      {props.index === 0 ? (<label htmlFor='measure-0'>Measure <span aria-label='required'>*</span>: </label>) : null}
      <div className='input-group'>
        <label htmlFor={props.measureId} className='mr-1 mt-1'>{props.index + 1}:</label>
        <input
          type='text'
          className='form-control'
          name={props.measureId}
          id={props.measureId}
          data-id={props.index}
          required
          onChange={ (e) => props.handleElement(e, name) }
        />
        {
          (props.index + 1) === props.lengthValue ? 
              <div className='input-group-append'>
                <RemoveAddButton index={props.index} addElement={props.addElement} name={name} symbol={'+'} />
                {(props.index !== 0 ) ? 
                    <RemoveAddButton index={props.index} removeElement={props.removeElement} name={name} symbol={'-'} /> 
                  : 
                    null
                }
              </div> 
            : 
              null
        }
      </div>
    </div>
  )
}

export default MeasureInput;