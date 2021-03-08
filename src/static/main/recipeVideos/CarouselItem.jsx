import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
  const { recipe } = props;

  return (
    <div>
      <iframe 
        title={recipe.strMeal} 
        width='560' 
        height='315' 
        src={recipe.strYoutube} 
        frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
        allowFullScreen 
        className={props.iframeClassName} 
        sandbox 
      />
      <div className={props.captionClassName} style={props.captionStyle}>
        <Link to={`/recipes/${recipe.strCategory}/${recipe.id}`}>
          <h5>{ recipe.strMeal.length > 20 ? recipe.strMeal.slice(0, 20) + '...' : recipe.strMeal}</h5>
        </Link>
      </div>
    </div>
  )
};

export default CarouselItem;