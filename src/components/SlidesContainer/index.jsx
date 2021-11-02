import React from 'react';
import styles from './SlidesContainer.module.sass';
import { images } from '../Slider/images';

function SlidesContainer (props) {
  const {
    currentImageIndex,
    handlers: [prevSlideHandler, nextSlideHandler],
  } = props;

  return (
    <div className={styles.slidesContainer}>
      <button className={styles.changeSlideButton} onClick={prevSlideHandler}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <img src={images[currentImageIndex]} alt='slide' />
      </div>
      <button className={styles.changeSlideButton} onClick={nextSlideHandler}>
        &#10095;
      </button>
    </div>
  );
}

export default SlidesContainer;
