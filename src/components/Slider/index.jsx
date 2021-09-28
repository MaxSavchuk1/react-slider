import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { images } from './images.js';
import styles from './Slider.module.sass';

function Slider () {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [duration, setDuration] = useState(5000);
  const maxDuration = 10000;
  const [isPaused, setIsPaused] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
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

  const controlHandler = () => {
    setIsPaused(!isPaused);
    duration > maxDuration ? setDuration(5000) : setDuration(9999999);
  };

  const fullScreenHandler = () => {
    setIsFullScreen(!isFullScreen);
    if (!isPaused) {
      controlHandler();
    }
  };

  const fullScreenStyle = classNames(styles.fullScreen, {
    [styles.fullScreenOn]: isFullScreen,
    [styles.emergence]: isFullScreen,
  });

  useEffect(() => {
    const _ = setInterval(nextSlideHandler, duration);
    return () => {
      clearInterval(_);
    };
  });

  return (
    <>
      {!isFullScreen && (
        <>
          <div className={styles.slidesContainer}>
            <button
              className={styles.changeSlideButton}
              onClick={prevSlideHandler}
            >
              &#10094;
            </button>
            <div className={styles.imageContainer}>
              <img src={currentSlide} alt='slide' />
            </div>
            <button
              className={styles.changeSlideButton}
              onClick={nextSlideHandler}
            >
              &#10095;
            </button>
          </div>
          <div className={styles.controlPanel}>
            {isPaused ? (
              <button onClick={controlHandler}>
                <i className='fas fa-play'></i>
              </button>
            ) : (
              <button onClick={controlHandler}>
                <i className='fas fa-pause'></i>
              </button>
            )}
            {!isPaused && (
              <>
                <div className={styles.intervalSet}>
                  <span>
                    Interval:{' '}
                    {duration / 1000 + ' second' + (duration > 1000 ? 's' : '')}
                  </span>
                  <input
                    type='range'
                    name='interval'
                    min='1000'
                    max={maxDuration}
                    value={duration}
                    step='1000'
                    onChange={durationHandler}
                  />
                </div>
              </>
            )}
            <button onClick={fullScreenHandler}>
              <i className='fas fa-expand'></i>
            </button>
          </div>
        </>
      )}
      <div className={fullScreenStyle} onClick={fullScreenHandler}>
        <span>Click anywhere to close</span>
        <img src={currentSlide} alt='slide' />
      </div>
    </>
  );
}

export default Slider;
