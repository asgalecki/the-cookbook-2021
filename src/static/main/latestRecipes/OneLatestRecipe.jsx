import React from 'react';
import { Link } from 'react-router-dom';

const OneLatestRecipe = (props) => {
  const { id, strMeal, strMealThumb, strCategory } = props.recipe;

  const cardHeight = {
    minHeight: '250px',
    height: '100%'
  }
  
  const innerCard = {
    position: 'absolute',
    bottom: '1%',
    left: '10%',
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderTop: '5px solid orange'
  };

  return (
    <div className='col mb-4'>
      <div className='card bg-dark' style={cardHeight}>
        <img src={strMealThumb} className='card-img img-fluid' alt='...' />
          <div className='card text-center p-1' style={innerCard}>
            <div className='card-body p-1'>
              <Link to={'/recipes/' + strCategory + '/' + id}>
                <button className="btn btn-warning">
                  See more
                </button>
                <h6 className='card-title text-center text-white text-uppercase overflow-hidden'>
                  {strMeal}
                </h6>
              </Link>   
            </div>
          </div>
      </div>
    </div>
  )
};

export default OneLatestRecipe;