import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import Recipe from './elements/Recipe';
import PaginationComponent from '../../../components/PaginationComponent';
import RecipesWrapper from '../../../components/RecipesWrapper';

class UserRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleElement = (e) => {
    this.setState({ activePage: e });
  };

  render() {
    const minHeightStyle = { minHeight: '90vh' };

    const { auth, recipes } = this.props;
    const userRecipes = (recipes || []).filter(({ authorId }) => authorId === auth.uid);

    const currentPage = Number(this.state.activePage); 

    if (!auth.uid) {
      return (
        <Redirect to='/signin' />
      )
    } else {
      return (
        <React.Fragment>
          {userRecipes.length > 0 ? (
              <RecipesWrapper title={'My Recipes'}>
                <div className='row row-cols-2 row-cols-lg-4'>
                  { userRecipes
                      .slice(((currentPage-1)*12), (12*currentPage))
                      .map(recipe => <Recipe recipe={recipe} key={'myrecipe' + recipe.id} /> )
                  }
                </div>
                <PaginationComponent
                  activePage={currentPage}
                  totalItemsCount={userRecipes.length}
                  {...this.state.activePage} 
                  handleElement={this.handleElement}
                />
              </RecipesWrapper>
            ) : (
              <main className='container d-flex flex-column justify-content-center align-items-center' style={minHeightStyle}>
                <h3 className='text-uppercase my-4'>{'My Recipes'}</h3>
                <p className='text-center'>
                  It seems that you have no recipes yet.
                  Let's go and <Link to={'/add'}>add</Link> some.
                </p>
              </main>
            )
          }
        </React.Fragment>
      )
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])  
)(UserRecipes);