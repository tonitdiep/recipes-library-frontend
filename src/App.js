
import './App.css';
import React, {Component} from 'react';
import RecipeContainer from './containers/RecipeContainer';
import Home from './components/Home'
import {Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {

  render() {


    return (
        <div className="App">
          <h1>Recipes App</h1>

          <Switch>            
          <Route exact path='/' component={Home}/>
          <RecipeContainer/>
      
          {/* <Redirect from="/recipes/new" to="/recipes/:id"/> */}
          </Switch>

    
       
   
        </div>
    );
  }
}
export default (App);