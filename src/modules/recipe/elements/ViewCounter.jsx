import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { incrementViews } from '../../../store/actions/viewCounterActions';

class ViewCounter extends React.Component {
  state = {
    id: '',
    strMeal: '',
    strCategory: '',
    strMealThumb: '',
    views: ''
  };

  componentDidMount() {
    if (isLoaded) {
      
      const id = this.props.recipeId;
      const strMeal = this.props.strMeal;
      const strCategory = this.props.strCategory;
      const strMealThumb = this.props.strMealThumb;

      const counter = this.props.counter;
      
      if (counter) {
        const currentView = counter ? counter.find( ({ id }) => id === this.props.recipeId) : null;
        const views = currentView ? (Number(currentView.views) + 1): 1;

        if (views) {
          this.setState({
            id: id,
            strMeal: strMeal,
            strCategory: strCategory,
            strMealThumb: strMealThumb,
            views: views
          });

          setTimeout(() => {
            if (this.state.id !== '') {
              this.props.incrementViews(this.state);
            };
          }, 100);
        };
      };
    }
  }

  render() {
    return (
      <div className='invisible' />
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementViews: (recipe) => dispatch(incrementViews(recipe))
  }
}

const mapStatetoProps = (state) => {
  return {
    counter: state.firestore.ordered.counter
  }
}

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'counter' }
  ])  
)(ViewCounter);