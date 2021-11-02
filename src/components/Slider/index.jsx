import classNames from 'classnames';
import React, { useEffect, useReducer } from 'react';
import { initialState, slidesReducer } from '../../reducers';
import styles from './Slider.module.sass';
import {
  setNextSlide,
  setPrevSlide,
  setDuration,
  setFullScreen,
  setPaused,
} from '../../actions/actionCreators';
import ControlPanel from '../ControlPanel';
import SlidesContainer from '../SlidesContainer';
import { images } from './images';

function Slider () {
  const [
    { duration, maxDuration, isPaused, isFullScreen, currentImageIndex },
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
          <SlidesContainer
            currentImageIndex={currentImageIndex}
            handlers={[prevSlideHandler, nextSlideHandler]}
          />
          <ControlPanel
            values={[duration, maxDuration, isPaused]}
            handlers={[controlHandler, durationHandler, fullScreenHandler]}
          />
        </>
      )}
      <div className={fullScreenStyle} onClick={fullScreenHandler}>
        <span>Click anywhere to close</span>
        <img src={images[currentImageIndex]} alt='slide' />
      </div>
    </>
  );
}

export default Slider;
