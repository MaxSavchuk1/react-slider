import ACTION_TYPES from './actionTypes';

export const setNextSlide = () => {
  return {
    type: ACTION_TYPES.SET_NEXT_SLIDE,
  };
};

export const setPrevSlide = () => {
  return {
    type: ACTION_TYPES.SET_PREV_SLIDE,
  };
};

export const setDuration = value => {
  return {
    type: ACTION_TYPES.SET_DURATION,
    value,
  };
};

export const setFullScreen = () => {
  return {
    type: ACTION_TYPES.SET_FULLSCREEN,
  };
};

export const setPaused = () => {
  return {
    type: ACTION_TYPES.SET_PAUSED,
  };
};
