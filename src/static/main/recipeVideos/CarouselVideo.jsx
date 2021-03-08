import React from 'react';
import CarouselItem from './CarouselItem';
import shuffleArray from '../../../helpers/shuffleArray';

const iframeClassName = 'd-block w-100';
const captionClassName = 'carousel-caption bg-dark mb-4';
const carouselCaption = {
  position: 'relative',
  left: '0',
  top: '0'
};

const CarouselVideo = (props) => {
  const { recipes } = props;
  let filteredRecipes;
  let shuffledRecipes;

  if (recipes) {
    filteredRecipes = (recipes || []).filter(({strYoutube}) => (strYoutube));
    shuffledRecipes = shuffleArray(filteredRecipes).slice(0, 3);
  }

  const addCarouselItems = (array) => {
    const carouselItems = [];
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        carouselItems.push(
          <div className='carousel-item active' key={'carouselItem' + array[i].id}>
            <CarouselItem recipe={array[i]} iframeClassName={iframeClassName} captionClassName={captionClassName} captionStyle={carouselCaption} />
          </div>
        )
      } else {
        carouselItems.push(
          <div className='carousel-item' key={'carouselItem' + array[i].id}>
            <CarouselItem recipe={array[i]} iframeClassName={iframeClassName} captionClassName={captionClassName} captionStyle={carouselCaption} />
          </div>
        )
      }
    }
    return carouselItems;
  }

  if (!recipes) {
    return (
      <section className={props.className}>
        <h5 className={`${props.captionClassName} text-uppercase text-danger`}>Recipe Videos</h5>
        <p className='text-center'>There will be displayed recipe videos added by users.</p>
      </section>
    )
  } else {
    return (
      <section className={props.className}>
        <h5 className='text-center text-uppercase text-danger'>Recipe Videos</h5>
        <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators pb-2'>
            <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active' />
            <li data-target='#carouselExampleCaptions' data-slide-to='1' />
            <li data-target='#carouselExampleCaptions' data-slide-to='2' />
          </ol>
          <div className='carousel-inner'>
            { filteredRecipes ? addCarouselItems(shuffledRecipes) : null }
          </div>
        </div>
      </section>
    )
  }
};

export default CarouselVideo;