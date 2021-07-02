import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware, compose} from 'redux';

import manageRecipe from './reducers/manageRecipe'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'

import Navigation from "./components/Navigation"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(manageRecipe, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navigation/>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

