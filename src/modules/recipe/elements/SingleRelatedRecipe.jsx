import React from 'react';
import { Link } from 'react-router-dom';

const imageHeight = {maxHeight: '25vh'};

const SingleRelatedRecipe = (props) => {
  return (
    <div className='card mx-5 mx-md-0 my-2'>
      <img src={props.recipe.strMealThumb} style={imageHeight} className='card-img-top img-fluid' alt='...' />
      <div className='text-center card-body'>
        <Link to={'/recipes/' + props.category + '/' + props.recipe.idMeal}>
          <h6 className='card-title text-wrap'>
            {props.recipe.strMeal}
          </h6>
        </Link>
      </div>
    </div>
  )
};

export default SingleRelatedRecipe;