import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipeThumbnail } from '../../../store/actions/recipeActions';

import ThumbnailWrapper from '../../../components/ThumbnailWrapper';

const CategoryThumbnail = (props) => {
  const { category } = props;

  const getDataFromAPI = e => {
    props.getRecipeThumbnail(category.strCategory);
  };
  
  return (
    <ThumbnailWrapper imageSource={category.strCategoryThumb}>
      <Link to={'/recipes/' + category.strCategory} onClick={getDataFromAPI}>
        <button className='btn btn-warning'>
          See more
        </button>
        <h6 className='card-title text-center text-white text-uppercase'>
          {category.strCategory}
        </h6>
      </Link>   
    </ThumbnailWrapper>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeThumbnail: (categoryName) => dispatch(getRecipeThumbnail(categoryName))
  }
}

export default connect(null, mapDispatchToProps)(CategoryThumbnail);