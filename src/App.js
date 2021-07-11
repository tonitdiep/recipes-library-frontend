
import './App.css';
import React, {Component} from 'react';
import RecipeContainer from './containers/RecipeContainer';
// import StarredContainer from './containers/StarredContainer'

// import {connect} from 'react-redux'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'
class App extends Component {

  render() {
    console.log("app render")

    return (
        <div className="App">
          <h1>Recipes App</h1>
          {/* <StarredContainer/> */}
          <Switch>            
          <Route exact path='/' component={Home}/>
          <RecipeContainer/>
          </Switch>

    
       
   
        </div>
    );
  }
}

export default (App);
