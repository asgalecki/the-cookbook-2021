import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import NoRecipes from '../../components/NoRecipes';
import RecipesWrapper from '../../components/RecipesWrapper';
import PaginationComponent from '../../components/PaginationComponent';
import RecipesThumbnail from '../../modules/recipes/elements/RecipesThumbnail';

import { getRecipeByName } from '../../store/actions/recipeActions';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      combinedRecipes: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // this.props.getRecipeByName(this.props.match.params.name);
  }

  handleElement = (e) => {
    this.setState({ activePage: e });
  };

  render() {
    const { recipes, meals } = this.props;
    const recipeName = this.props.match.params.name;
    const currentPage = Number(this.state.activePage);

    const combinedRecipes = (recipes || [])
                              .filter(recipe => {
                                return recipe.strMeal.toLowerCase().includes(recipeName.toLowerCase())
                              })
                              .concat((meals || []));

    if (combinedRecipes.length === 0) {
      return (
        <NoRecipes>
          There is no "{recipeName}" recipe.
        </NoRecipes>
      )
    } else {
      return (
        <RecipesWrapper title={`Search: ${recipeName}`}>
          <div className='row row-cols-2 row-cols-lg-4'>
            { combinedRecipes
                .slice(((currentPage-1)*12), (12*currentPage))
                .map(recipe => <RecipesThumbnail recipe={recipe} key={'filtered' + recipe.strMeal + recipe.id + recipe.idMeal}/> )
            }
          </div>
          <PaginationComponent
            activePage={currentPage}
            totalItemsCount={combinedRecipes.length}
            {...this.state.activePage} 
            handleElement={this.handleElement}
          />
        </RecipesWrapper>
      )
    } 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeByName: (recipeName) => dispatch(getRecipeByName(recipeName))
  }
}

const mapStatetoProps = (state) => {
  return {
    meals: state.recipe.meals,
    recipes: state.firestore.ordered.recipes,
    recipeName: state.recipeName
  }
}

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])  
)(Recipes);