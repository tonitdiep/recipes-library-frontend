
import './App.css';
import React, {Component} from 'react';
import RecipeContainer from './containers/RecipeContainer';

import fetchRecipes from './actions/fetchRecipes'
import {connect} from 'react-redux'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'
class App extends Component {
//   componentDidMount = () =>{
//     this.props.fetchRecipes();
// }
  render() {
    console.log("app render")

    return (
        <div className="App">
          <h1>Recipes App</h1>

          <Switch>            
          <Route exact path='/' component={Home}/>
          <RecipeContainer/>
          </Switch>

    
       
   
        </div>
    );
  }
}
export default (App);
// export default connect(null, {fetchRecipes})(App);
