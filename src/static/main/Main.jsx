import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import LatestRecipes from './latestRecipes/LatestRecipes';
import CarouselVideo from './recipeVideos/CarouselVideo';
import RecipeVideos from './recipeVideos/RecipeVideos';
import WelcomeTop from './elements/WelcomeTop';

class Main extends React.Component {
  state = { matches: window.matchMedia('(min-width: 768px)').matches};

  componentDidMount() {
    window.scrollTo(0, 0);
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia('(min-width: 768px)').addListener(handler);
  };

  render() {
    const { recipes } = this.props;

    const desktopStyle = 'my-2 p-2 border border-light rounded shadow';
    const mobileStyle = 'p-1 mt-4 border-top border-light rounded shadow';
    const captionStyle = 'text-center';

    return (
      <main className='container col-md-8'>

        {!this.state.matches && ( // Mobile version
          <div>
            <WelcomeTop className={mobileStyle} captionClassName={captionStyle} />
            <CarouselVideo recipes={recipes} className={mobileStyle} />
            <LatestRecipes recipes={recipes} className={mobileStyle} captionClassName={captionStyle} />
          </div>
        )}

        {this.state.matches && ( // Desktop version
          <div>
            <RecipeVideos recipes={recipes} className={desktopStyle} />
            <LatestRecipes recipes={recipes} className={desktopStyle} />
          </div>
        )}

      </main>
    )
  };
};

const mapStatetoProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes,
  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])  
)(Main);