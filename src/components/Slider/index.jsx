import React, { useEffect, useState } from 'react';
import { images } from './../../api/images';
import styles from './Slider.module.sass';

function Slider () {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0); //определяю номер слайда
  const [duration, setDuration] = useState(5000); // интервал смены слайдов
  const [isPaused, setIsPaused] = useState(false); // на паузе или нет
  const durationHandler = ({ target: { value } }) => {
    // инпут меняет длину задержки между слайдами
    setDuration(value);
  };

  let currentSlide = images[currentSlideNumber]; // текущий номер слайда в рендере

  const nextSlideHandler = () => {
    // следующий слайд
    currentSlideNumber === images.length - 1
      ? setCurrentSlideNumber(0)
      : setCurrentSlideNumber(currentSlideNumber + 1);
  };
  const prevSlideHandler = () => {
    // предыдущий слайд
    currentSlideNumber === 0
      ? setCurrentSlideNumber(images.length - 1)
      : setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const controlHandler = () => {
    // старт и пауза
    setIsPaused(!isPaused);
    duration > 10000 ? setDuration(5000) : setDuration(999999); // ставлю 999 минут если пауза :)
  };

  useEffect(() => {
    // собственно интервал смены слайдов
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
            <span>
              Interval{' '}
              {duration / 1000 + ' second' + (duration > 1000 ? 's' : '')}
            </span>
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
        )}
        <button>
          <i className='fas fa-expand'></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
