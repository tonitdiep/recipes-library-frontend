import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware, compose} from 'redux';
import manageRecipe from './reducers/manageRecipe'
import thunk from 'redux-thunk'
import  {BrowserRouter as Router} from 'react-router-dom'
import Navigation from "./components/Navigation"
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(manageRecipe, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
   {/* <Router history={history}> */}
   <Router>
      <Navigation/>
    <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

