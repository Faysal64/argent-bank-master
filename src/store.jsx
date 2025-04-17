import { createStore, combineReducers } from 'redux';

// --- auth reducer ---
const authInitialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
};

function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, token: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, token: null };
    default:
      return state;
  }
}

// --- user reducer ---
const userInitialState = {
  name: 'Tony Jarvis',
};

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// --- combine & create store ---
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
