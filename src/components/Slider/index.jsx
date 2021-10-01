import classNames from 'classnames';
import React, { useEffect, useReducer } from 'react';
import 'animate.css';
import { initialState, slidesReducer } from '../../reducers';
import styles from './Slider.module.sass';
import {
  setNextSlide,
  setPrevSlide,
  setDuration,
  setFullScreen,
  setPaused,
} from '../../actions/actionCreators';

function Slider () {
  const [
    { duration, maxDuration, isPaused, isFullScreen, images },
    dispatch,
  ] = useReducer(slidesReducer, initialState);

  const fullScreenStyle = classNames(styles.fullScreen, {
    [styles.fullScreenOn]: isFullScreen,
    [styles.emergence]: isFullScreen,
  });

  useEffect(() => {
    const intervalOfChangingSlides = setInterval(nextSlideHandler, duration);
    return () => {
      clearInterval(intervalOfChangingSlides);
    };
  });

  const prevSlideHandler = () => {
    dispatch(setPrevSlide());
  };
  const nextSlideHandler = () => {
    dispatch(setNextSlide());
  };
  const controlHandler = () => {
    dispatch(setPaused());
  };
  const durationHandler = ({ target: { value } }) => {
    dispatch(setDuration(value));
  };
  const fullScreenHandler = () => {
    dispatch(setFullScreen());
  };

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
              <img src={images[0]} alt='slide' />
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
        <img src={images[0]} alt='slide' />
      </div>
    </>
  );
}

export default Slider;
