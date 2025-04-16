import { createStore } from 'redux';

// état initial global
const initialState = {
  isLoggedIn: !!localStorage.getItem('token'), // on garde l'état même après refresh
  token: localStorage.getItem('token') || null,
};

// reducer : fonction qui gère les changements d'état
function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
}

const store = createStore(authReducer);

export default store;
