import React from 'react';

const CategoryOption = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor='strCategory'>Category <span aria-label='required'>*</span>: </label>
      <select 
        className='form-control' 
        id='strCategory' 
        name='strCategory' 
        onChange={ (e) => props.handleFormElement(e.target.name, e.target.value) }
      >
        <option value='Miscellaneous'>Miscellaneous</option>
        <option value='Pasta'>Pasta</option>
        <option value='Seafood'>Seafood</option>
        <option value='Vegan'>Vegan</option>
        <option value='Vegetarian'>Vegetarian</option>
        <optgroup label='Meal'>
          <option value='Breakfast'>Breakfast</option>
          <option value='Dessert'>Dessert</option>
          <option value='Side'>Side</option>
          <option value='Starter'>Starter</option>
        </optgroup>
        <optgroup label='Meat'>
          <option value='Beef'>Beef</option>
          <option value='Chicken'>Chicken</option>
          <option value='Goat'>Goat</option>
          <option value='Lamb'>Lamb</option>
          <option value='Pork'>Pork</option>
        </optgroup>
      </select>
    </div>
  )
}

export default CategoryOption;