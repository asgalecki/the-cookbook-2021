import React from 'react';

const AreaOption = (props) => {
  return (
    <div className='form-group'>
    <label htmlFor='strArea'>Area <span aria-label='required'>*</span>: </label>
    <select 
      className='form-control' 
      id='strArea' 
      name='strArea' 
      onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
    >
      <option value='Unknown'>Unknown</option>
      <option value='American'>American</option>
      <option value='British'>British</option>
      <option value='Canadian'>Canadian</option>
      <option value='Chinese'>Chinese</option>
      <option value='Dutch'>Dutch</option>
      <option value='Egyptian'>Egyptian</option>
      <option value='French'>French</option>
      <option value='Greek'>Greek</option>
      <option value='Indian'>Indian</option>
      <option value='Irish'>Irish</option>
      <option value='Italian'>Italian</option>
      <option value='Jamaican'>Jamaican</option>
      <option value='Japanese'>Japanese</option>
      <option value='Kenyan'>Kenyan</option>
      <option value='Malaysian'>Malaysian</option>
      <option value='Mexican'>Mexican</option>
      <option value='Moroccan'>Moroccan</option>
      <option value='Polish'>Polish</option>
      <option value='Russian'>Russian</option>
      <option value='Spanish'>Spanish</option>
      <option value='Thai'>Thai</option>
      <option value='Tunisian'>Tunisian</option>
      <option value='Turkish'>Turkish</option>
      <option value='Vietnamese'>Vietnamese</option>
    </select>
  </div>
  )
}

export default AreaOption;