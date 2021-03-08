import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getRecipeThumbnail } from '../../store/actions/recipeActions';

import NoRecipes from '../../components/NoRecipes';
import RecipesThumbnail from './elements/RecipesThumbnail';
import RecipesWrapper from '../../components/RecipesWrapper';
import PaginationComponent from '../../components/PaginationComponent';

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
    this.props.getRecipeThumbnail(this.props.match.params.id);
  }

  handleElement = (e) => {
    this.setState({ activePage: e });
  };

  render() {

    const { recipes, meals } = this.props;
    const category = this.props.match.params.id;
    const currentPage = Number(this.state.activePage); 

    const combinedRecipes = (recipes || [])
                              .filter(({strCategory}) => (strCategory === category))
                              .concat((meals || []));

    if (!combinedRecipes) {
      return (
        <NoRecipes>
          There is no recipes yet...
        </NoRecipes>
      )
    } else {
      return (
        <RecipesWrapper title={`${category} Recipes`}>
          <div className='row row-cols-2 row-cols-lg-4'>
            { combinedRecipes
                .slice(((currentPage-1)*12), (12*currentPage))
                .map(recipe => <RecipesThumbnail recipe={recipe} key={'recipe' + recipe.strMeal + recipe.id + recipe.idMeal} category={category}/> )
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
    getRecipeThumbnail: (categoryName) => dispatch(getRecipeThumbnail(categoryName))
  }
}

const mapStatetoProps = (state) => {
  return {
    meals: state.recipe.meals,
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])  
)(Recipes);