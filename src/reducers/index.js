import ACTION_TYPES from '../actions/actionTypes';
import { images } from '../components/Slider/images';

export const initialState = {
  duration: 5000,
  maxDuration: 10000,
  isPaused: false,
  isFullScreen: false,
  currentImageIndex: 0,
};

export const slidesReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NEXT_SLIDE: {
      const { currentImageIndex } = state;
      let newCurrentImageIndex = currentImageIndex;
      newCurrentImageIndex < images.length
        ? newCurrentImageIndex++
        : (newCurrentImageIndex = 0);
      return {
        ...state,
        currentImageIndex: newCurrentImageIndex,
      };
    }
    case ACTION_TYPES.SET_PREV_SLIDE: {
      const { currentImageIndex } = state;
      let newCurrentImageIndex = currentImageIndex;
      newCurrentImageIndex > 0
        ? newCurrentImageIndex--
        : (newCurrentImageIndex = images.length - 1);
      return {
        ...state,
        currentImageIndex: newCurrentImageIndex,
      };
    }
    case ACTION_TYPES.SET_DURATION: {
      const { value } = action;
      const newDuration = value;
      return {
        ...state,
        duration: newDuration,
      };
    }
    case ACTION_TYPES.SET_PAUSED: {
      const { isPaused } = state;
      if (isPaused) {
        return {
          ...state,
          duration: 5000,
          isPaused: false,
        };
      } else {
        return {
          ...state,
          duration: 9999999,
          isPaused: true,
        };
      }
    }
    case ACTION_TYPES.SET_FULLSCREEN: {
      const { isFullScreen } = state;
      return {
        ...state,
        isFullScreen: !isFullScreen,
      };
    }

    default:
      return state;
  }
};
