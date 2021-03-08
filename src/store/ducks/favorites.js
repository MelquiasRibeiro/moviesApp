import AsyncStorage from '@react-native-async-storage/async-storage';

export const Types = {
    ADD: 'favorite/ADD',
    REMOVE: 'favorite/REMOVE',
  };

const initialState = {
  favorites:[]
  
};

export default function reducer(state = initialState, action) {
    const { payload, type } = action
    const { favorites } = state

    switch (type) {
      case Types.ADD:
        return { ...state, favorites: [ ...favorites, payload.movie ] }
      case Types.REMOVE:
        return { ...state, favorites: favorites.filter(favorite => favorite.id !== payload.id) }
        default:
        return state;
    }
  }

  // Action Creators

export function add(movie) {
    return {
      type: Types.ADD,
      payload: {
        movie
      },
    }
  }
  
  export function remove(id) {
    return {
      type: Types.REMOVE,
      payload: {
        id
      },
    }
  }