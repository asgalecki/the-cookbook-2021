import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import SinglePopularRecipe from './SinglePopularRecipe';

const PopularRecipes = (props) => {
  const { counter } = props;
  let popularRecipes;
  
  if (counter) {
    const recipesSorted = counter.slice().sort(function(a,b){
      return (b.views) - (a.views);
    });
    
    popularRecipes = recipesSorted.slice(0, 3);
  }

  if (!popularRecipes) {
    return (
      <section className={props.className}>
      <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Popular Recipes</h5>
      <p>Loading popular recipes...</p>
    </section>
    )
  } else {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Popular Recipes</h5>
        <div className='d-flex flex-column'>
          { popularRecipes && popularRecipes
              .map(recipe => <SinglePopularRecipe recipe={recipe} key={'popular' + recipe.strMeal + recipe.id} /> )
          }
        </div>
      </section>
    )
  }
};

const mapStatetoProps = (state) => {
  return {
    counter: state.firestore.ordered.counter
  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'counter' }
  ])  
)(PopularRecipes);