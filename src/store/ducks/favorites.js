
// Action Types

export const Types = {
    ADD: 'favorite/ADD',
    REMOVE: 'favorite/REMOVE',
  };

const initialState = {
  favorites:[{"id": 527774,
  "title": "Raya e o Último Dragão",
  "vote_average": 8.5,
  "poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
},
{"id": 527775,
"title": "Raya e o Último Dragão",
"vote_average": 8.5,
"poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
},
{"id": 527776,
"title": "Raya e o Último Dragão",
"vote_average": 8.5,
"poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
}]
  
};

export default function reducer(state = initialState, action) {
    const { payload, type } = action
    const { favorites } = state

    switch (type) {
      case Types.ADD:
        return { ...state, favorites: [ ...favorites, payload ] }
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