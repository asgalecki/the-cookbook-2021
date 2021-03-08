import React from 'react';
import SingleRelatedRecipe from './SingleRelatedRecipe';

const RelatedRecipes = (props) => {
  return (
    <div className='my-2'>
      <h5 className='text-uppercase my-2'>Related recipes</h5>
      <div className='d-flex justify-content-between flex-column flex-md-row'>
      { props.recipes
          .map(recipe => <SingleRelatedRecipe recipe={recipe} key={'related' + recipe.strMeal + recipe.id + recipe.idMeal} category={props.category} /> )
      }
      </div>
    </div>
  )
};

export default RelatedRecipes;