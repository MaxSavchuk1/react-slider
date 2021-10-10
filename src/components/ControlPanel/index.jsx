import React from 'react';
import styles from './ControlPanel.module.sass';

function ControlPanel (props) {
  const {
    values: [duration, maxDuration, isPaused],
    handlers: [controlHandler, durationHandler, fullScreenHandler],
  } = props;

  return (
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
  );
}

export default ControlPanel;
