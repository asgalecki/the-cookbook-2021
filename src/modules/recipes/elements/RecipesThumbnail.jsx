import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailWrapper from '../../../components/ThumbnailWrapper';

const RecipesThumbnail = ({ recipe, category }) => {

  const recipeUrl = (recipe.id ? 
      (`/recipes/${recipe.strCategory}/${recipe.id}`) 
    : 
      (`/recipes/${category}/${recipe.idMeal}`));

  return (
    <ThumbnailWrapper imageSource={recipe.strMealThumb}>
      <Link to={recipeUrl}>
        <button className='btn btn-warning'>
          See more
        </button>
        <h6 className='card-title text-center text-white text-uppercase overflow-hidden'>
          {recipe.strMeal}
        </h6>
      </Link>
    </ThumbnailWrapper>
  )
};

export default RecipesThumbnail;