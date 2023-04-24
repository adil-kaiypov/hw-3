import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  user: {
      name: '',
      age: 0,
      gender: ''
  }
}

let action = {type:'', payload: ''}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {...state, user: {...state.user, name: action.payload}};
    case 'CHANGE_AGE':
      return {...state, user: {...state.user, age: action.payload}};
    case 'CHANGE_GENDER':
      return {...state, user: {...state.user, gender: action.payload}};
    default:
      return state;
  }
};


const store = createStore(userReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
