// Action Types

export const Types = {
    IS_LOADING: "movies/LOADING",
    SET_MIDIA : "movies/SET_MIDIA",
    LOAD_DATA_SAGA : "movies/LOAD_DATA_SAGA"
}

const initialState = {
    movies:[],
  };


export default function reducer(state = initialState, action) {
    const { payload, type } = action

    switch (type) {
      case Types.SET_MIDIA:
        return { movies: payload, isLoading: false}
      case Types.IS_LOADING:
        return { ...state, isLoading: true }
        default:
        return state;
    }
  }


export function loadMidia(midia) {
    return {
      type: Types.LOAD_DATA_SAGA,
      payload: {
        midia
      },
    }
  }
  export function setIsLoadingChars(){
    return { 
        type: Types.IS_LOADING 
    }
}