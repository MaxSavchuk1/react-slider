import ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
  duration: 5000,
  maxDuration: 10000,
  isPaused: false,
  isFullScreen: false,
  images: [
    'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
    'https://kaifolog.ru/uploads/posts/2017-09/1506645053_001.jpg',
    'https://ribalych.ru/wp-content/uploads/2017/12/krasota_003.jpg',
    'https://www.meme-arsenal.com/memes/ed85b81918cee681abed15b7e137920f.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/04/11-1.jpg',
    'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-different-topics-01.jpg',
    'https://a.d-cd.net/loAAAgOLq-A-960.jpg',
    'https://miro.medium.com/max/2732/1*qvphkxaDna8aw0zZ8-fx5A.jpeg',
    'http://www.rosphoto.com/images/u/articles/1601/4-sergey-sutkovoy.jpg',
  ],
};

export const slidesReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NEXT_SLIDE: {
      const { images } = state;
      const newImages = [...images];
      newImages.push(newImages.shift());
      return {
        ...state,
        images: newImages,
      };
    }
    case ACTION_TYPES.SET_PREV_SLIDE: {
      const { images } = state;
      const newImages = [...images];
      newImages.unshift(newImages.pop());
      return {
        ...state,
        images: newImages,
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
