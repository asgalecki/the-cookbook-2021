import React from 'react';

import OneLatestRecipe from './OneLatestRecipe';

const LatestRecipes = (props) => {
  const { recipes } = props;
  let recipesSorted;

  if (recipes) {
    recipesSorted = recipes.slice().sort(function(a,b){
      return (b.createdAt.seconds) - (a.createdAt.seconds);
    });
  }

  if (!recipes) {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Latest Recipes</h5>
        <p className='text-center'>There will be displayed recipes added by users.</p>
      </section>
    )
  } else {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Latest Recipes</h5>
        <div className='row row-cols-1 row-cols-md-2 d-flex flex-wrap'>
          {recipesSorted && recipesSorted.slice(0, 4).map(recipe => {
            return <OneLatestRecipe recipe={recipe} key={'latestRecipe' + recipe.id} />
          })}
        </div>
      </section>
    )
  }
};

export default LatestRecipes;