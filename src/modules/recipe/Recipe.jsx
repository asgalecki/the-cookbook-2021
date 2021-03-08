import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getRecipe, getRecipeThumbnail } from '../../store/actions/recipeActions';
import { Helmet } from 'react-helmet';
import shuffleArray from '../../helpers/shuffleArray';

import Aside from '../../static/aside/Aside';
import Video from './elements/Video';
import Share from './elements/Share';
import Description from './elements/Description';
import Ingredients from './elements/Ingredients';
import Instructions from './elements/Instructions';
import RelatedRecipes from './elements/RelatedRecipes';
import ViewCounter from './elements/ViewCounter';
import NotFound from '../../pages/NotFound';

const iframeStyle = {
  display: 'block',
  maxWidth: '100%'
};

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      combinedRecipes: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const recipeId = this.props.match.params.id;
    const recipeCategory = this.props.match.params.category;

    this.props.getRecipeThumbnail(recipeCategory);
    this.props.getRecipe(recipeId);
  }

  render() {
    const { recipe, recipes, meals } = this.props;

    const combinedRecipes = (recipes || [])
      .filter(({strCategory}) => (strCategory === this.props.strCategory))
      .concat((meals || []));

    const shuffledRecipes = shuffleArray(combinedRecipes);
    const relatedRecipes = shuffledRecipes.slice(0, 3);

    if (!recipe) {
      return (
        <NotFound />
      )
    } else {
      return (
        <main>
          <Helmet>
            <title>The Cookbook - {recipe.strMeal + ' recipe'}</title>
            <meta name='description' content={'Recipe: ' + recipe.strMeal} />
          </Helmet>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to={'/'}>Home</Link></li>
              <li className='breadcrumb-item'><Link to={'/recipes/'}>Recipes</Link></li>
              <li className='breadcrumb-item'><Link to={`/recipes/${recipe.strCategory}`}>{recipe.strCategory}</Link></li>
              <li className='breadcrumb-item active' aria-current='page'>{recipe.strMeal}</li>
            </ol>
          </nav>
          <div className='container'>
            <div className='row text-left p-0'>
              <h3 className='text-uppercase my-4 ml-3 ml-md-0'>{recipe.strMeal}</h3>
            </div>
            <div className='row d-flex'>
                <section className='card col-md-8 mx-3 mx-md-0 my-2 p-2 border border-light rounded shadow'>
                  <Description source={recipe.strMealThumb} category={recipe.strCategory} area={recipe.strArea} author={recipe.authorNickName}  created={recipe.createdAt} />
                  <Ingredients recipe={recipe} />
                  <Instructions instructions={recipe.strInstructions} />
                  {recipe.strYoutube ? <Video title={recipe.strMeal} source={recipe.strYoutube} iframeStyle={iframeStyle} /> : null}
                  <Share strMeal={recipe.strMeal} />
                  <RelatedRecipes category={recipe.strCategory} recipes={relatedRecipes} />
                  <ViewCounter recipeId={this.props.match.params.id} strMeal={recipe.strMeal} strCategory={recipe.strCategory} strMealThumb={recipe.strMealThumb} />
                </section>
                <Aside />
            </div>
          </div>
        </main>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
    getRecipeThumbnail: (categoryName) => dispatch(getRecipeThumbnail(categoryName))
  }
}

const mapStatetoProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const meal = state.recipe.meal;

  let recipe;

  if (id.length > 10) {
    recipe = recipes ? recipes[id] : null; 
  } else {
    recipe = meal ? meal[0] : null;
  }
  
  return {
    recipe: recipe,
    meal: state.recipe.meal,
    meals: state.recipe.meals,
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])  
)(Recipe);