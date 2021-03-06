
export const Types = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT',
  };
  

  
  const initialState = {
    isLogged: false,
    token: null,
    user: {},
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.LOGIN:
        return ;
      case Types.LOGOUT:
        return ;
      default:
        return state;
    }
  }
  
  
  export function login(username, password) {
    return {
      type: Types.LOGIN,
      payload: {
        username,
        password
      },
    }
  }
  
  export function logout() {
    return {
      type: Types.LOGOUT,
    }
  }