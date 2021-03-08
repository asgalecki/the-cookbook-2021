import React from 'react';
import { Link } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';
import { deleteRecipe } from '../../../../store/actions/recipeActions';
import { connect } from 'react-redux';

const cardHeight = {
  minHeight: '250px'
}

const innerCardStyle = {
  position: 'absolute',
  bottom: '1%',
  left: '10%',
  width: '80%',
  height: '50%',
  backgroundColor: 'rgba(0,0,0, 0.7)',
  borderTop: '5px solid orange'
};

const Recipe = (props) => {
  const { recipe } = props;

  const removeRecipe = e => {
    props.deleteRecipe(recipe.id);
  };

  return (
    <div className='col my-4 py-4'>
      <div className='card h-100 bg-dark rounded-0' style={cardHeight}>
        <div className="card-header">
          <Link to={'#'} onClick={removeRecipe} className='btn btn-outline-warning'><Trash /></Link>
        </div>
        <img src={recipe.strMealThumb} className='card-img-top' alt='...' />
        <div className='card text-center p-1' style={innerCardStyle}>
          <div className='card-body p-1'>
            <Link to={'/recipes/' + recipe.strCategory + '/' + recipe.id}>   
              <button className='btn btn-warning'>
                See more
              </button>
              <h6 className='card-title text-center text-white text-uppercase overflow-hidden'>
                {recipe.strMeal}
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (choosenMeal) => dispatch(deleteRecipe(choosenMeal)),
  }
}

export default connect(null, mapDispatchToProps)(Recipe);