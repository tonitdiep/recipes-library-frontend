
import './App.css';
import React, {Component} from 'react';
import RecipeContainer from './containers/RecipeContainer';
// import {connect} from 'react-redux'

class App extends Component {
  
  render() {
    console.log("app render")
    
        
    return (
        <div className="App">
          <h1>Recipes Library</h1>
          <RecipeContainer/>

        </div>
  );
}
}
// const mapStateToProps = (state) => {
//   console.log("inside app.js", state)
//   return {
//     recipes: state.recipes,
//     loading: state.loading
//   }
// } 
// const mapDispatchToProps = (dispatch) => {
  
//   return {
//     fetchRecipes: () => dispatch(fetchRecipes()),
//     addRecipe: () => dispatch(addRecipe())
//     // addRecipe: recipe => dispatch({type: "ADD_RECIPE", recipe})
//   }
// }
export default (App);
