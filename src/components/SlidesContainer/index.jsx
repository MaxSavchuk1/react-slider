import React from 'react';
import styles from './SlidesContainer.module.sass';

function SlidesContainer (props) {
  const {
    images,
    handlers: [prevSlideHandler, nextSlideHandler],
  } = props;

  return (
    <div className={styles.slidesContainer}>
      <button className={styles.changeSlideButton} onClick={prevSlideHandler}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <img src={images[0]} alt='slide' />
      </div>
      <button className={styles.changeSlideButton} onClick={nextSlideHandler}>
        &#10095;
      </button>
    </div>
  );
}

export default SlidesContainer;
