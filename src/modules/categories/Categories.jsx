import React from 'react';
import { connect } from 'react-redux';
import { getRecipeCategories } from '../../store/actions/recipeActions';

import NoRecipes from '../../components/NoRecipes';
import CategoryThumbnail from './elements/CategoryThumbnail';
import RecipesWrapper from '../../components/RecipesWrapper';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getRecipeCategories();
  }

  render() {
    const { categories } = this.props;

    if (categories === undefined) {
      return (
        <NoRecipes>
          There is no recipes yet...
        </NoRecipes>
      )
    } else {
      return (
        <RecipesWrapper title={'Recipes'}>
          <div className='row row-cols-2 row-cols-lg-4'>
            { categories.map(category => <CategoryThumbnail category={category} key={category.idCategory} />) }
          </div>
        </RecipesWrapper>
      )
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeCategories: () => dispatch(getRecipeCategories())
  }
}

const mapStatetoProps = (state) => {
  return {
    categories: state.recipe.categories
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Categories);