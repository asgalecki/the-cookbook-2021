import React from 'react';
import CarouselItem from './CarouselItem';
import shuffleArray from '../../../helpers/shuffleArray';

const iframeClassName = 'w-100 h-75';
const captionClassName = 'text-center';

const RecipeVideos = (props) => {
  const { recipes } = props;
  let filteredRecipes;

  if (recipes) {
    filteredRecipes = (recipes || []).filter(({strYoutube}) => (strYoutube));
  }

  if (!recipes) {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Recipe Videos</h5>
        <p className='text-center'>There will be displayed recipe videos added by users.</p>
      </section>
    )
  } else {
    return (
      <section className={props.className}>
        <h5 className='text-uppercase text-danger'>Recipe Videos</h5>
        <div className='d-flex justify-content-between'>
          { filteredRecipes && shuffleArray(filteredRecipes).slice(0, 3).map(recipe => {
            return (
              <CarouselItem recipe={recipe} iframeClassName={iframeClassName} captionClassName={captionClassName} key={'recipeVideo' + recipe.id}/>
            )
          })}
        </div>
      </section>
    )
  }
};

export default RecipeVideos;