import React from 'react';
import { Link } from 'react-router-dom';

const imageCoverStyle = {
  objectFit: 'cover',
  maxHeight: '190px'
};

const componentMaxHeight = { maxHeight: '210px' };
const imageMaxHeight = { maxHeight: '190px' };

const SinglePopularRecipe = (props) => {
  const { recipe } = props;
  return (
    <div className='card my-1 py-2 pl-2' style={componentMaxHeight}>
      <div className='row no-gutters'>
        <div className='w-50' style={imageMaxHeight}>
          <img src={recipe.strMealThumb} className='card-img img-fluid' style={imageCoverStyle} alt='...' />
        </div>
        <div className='card-body py-0 d-flex flex-column flex-wrap justify-content-between w-50' style={imageMaxHeight}>
          <Link to={'/recipes/' + recipe.strCategory + '/' + recipe.id}>
            <h5 className='card-title text-danger'>
              { recipe.strMeal.length > 50 ? recipe.strMeal.slice(0, 20) + '...' : recipe.strMeal}
            </h5>
          </Link> 
          <p className='text-muted'>
            {recipe.views} {recipe.views === 1 ? 'view' : 'views'}
          </p>
        </div>
      </div>
    </div>
  )
};

export default SinglePopularRecipe;