import React, { useEffect, useState } from 'react';
import { images } from './../../api/images';
import styles from './Slider.module.sass';

function Slider () {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [duration, setDuration] = useState(5000);
  const durationHandler = ({ target: { value } }) => {
    setDuration(value);
  };
  let currentSlide = images[currentSlideNumber];
  const nextSlideHandler = () => {
    currentSlideNumber === images.length - 1
      ? setCurrentSlideNumber(0)
      : setCurrentSlideNumber(currentSlideNumber + 1);
  };
  const prevSlideHandler = () => {
    currentSlideNumber === 0
      ? setCurrentSlideNumber(images.length - 1)
      : setCurrentSlideNumber(currentSlideNumber - 1);
  };

  useEffect(() => {
    const _ = setInterval(nextSlideHandler, duration);
    return () => {
      clearInterval(_);
    };
  });
  return (
    <>
      <div className={styles.slidesContainer}>
        <button className={styles.changeSlide} onClick={prevSlideHandler}>
          &#10094;
        </button>
        <div className={styles.imageContainer}>
          <img src={currentSlide} alt='slide :)' />
        </div>

        <button className={styles.changeSlide} onClick={nextSlideHandler}>
          &#10095;
        </button>
      </div>
      <input
        type='range'
        name='interval'
        min='1000'
        max='10000'
        value={duration}
        step='500'
        onChange={durationHandler}
      />
    </>
  );
}

export default Slider;

// play/pause - auto timeout,
// automatic timeout (by default 5s) to switch slides => input type="range",
// (fullscreen)
