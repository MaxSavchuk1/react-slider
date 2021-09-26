import React from 'react';
import Slider from '../components/Slider';
import styles from './SliderPage.module.sass';

function SliderPage () {
  return (
    <div className={styles.mainContainer}>
      <Slider />
    </div>
  );
}

export default SliderPage;
