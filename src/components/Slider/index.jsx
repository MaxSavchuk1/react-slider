import React, { useState } from 'react';
import { images } from './../../api/images';
import styles from './Slider.module.sass';

function Slider () {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  let currentSlide = images[currentSlideNumber];
  const nextButtonHandler = () => {
    currentSlideNumber === images.length - 1
      ? setCurrentSlideNumber(0)
      : setCurrentSlideNumber(currentSlideNumber + 1);
  };
  const prevButtonHandler = () => {
    currentSlideNumber === 0
      ? setCurrentSlideNumber(images.length - 1)
      : setCurrentSlideNumber(currentSlideNumber - 1);
  };
  return (
    <div className={styles.slidesContainer}>
      <button className={styles.changeSlide} onClick={prevButtonHandler}>
        &#10094;
      </button>
      <img src={currentSlide} alt='slide :)' />
      <button className={styles.changeSlide} onClick={nextButtonHandler}>
        &#10095;
      </button>
    </div>
  );
}

export default Slider;

//  <a class="prev" onclick="plusSlides(-1)"></a>
//  <a class="next" onclick="plusSlides(1)"></a>

// кнопка: nextSlide,
// кнопка: prevSlide,
// play/pause - auto timeout,
// automatic timeout (by default 5s) to switch slides => input type="range",
// (fullscreen)
