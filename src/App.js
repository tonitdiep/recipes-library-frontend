// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getRecipes} from './actions/recipeActions'

import RecipleListItem from './components/RecipeListItem';
import RecipeForm from './components/RecipeForm';


class App extends Component {

  componentDidMount() {
    debugger
    console.log(this.props)
    this.props.goGetRecipes()
    // this.props.addRecipe()
  }
  handleLoading = () => {
    debugger
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <RecipleListItem recipes={this.props.recipes}/>
    }
  }
  
  render() {
    console.log(this.props.recipes)
    const recipes = this.props.recipes.map((recipe, i) => 
      <li key={i}>{recipe.cuisine_country}</li>)
      // <li key={i}>{recipe.name}<button id={recipe.id}>X</button></li>)
  return (
    <div className="App">
      <h3>Recipes Library</h3>
      {/* {this.handleLoading} */}
      <ul>{this.props.loading ? <h3>Loading...</h3> : recipes}</ul>
      {/* <RecipeListItem/> */}
      {/* {this.props.recipes} */}
    <hr/>
      <h3>Compose A Recipe</h3>
      <RecipeForm/>
 
      <hr/>
  
    </div>
  );
}
}
const mapStateToProps = (state) => {
  debugger
  console.log("inside app.js", state)
  return {
    recipes: state.recipes,
    loading: state.loading
  }
} 
const mapDispatchToProps = (dispatch) => {
  return {
    goGetRecipes: () => dispatch(getRecipes())
    // addRecipe: name => dispatch({type: "ADD_RECIPE", name})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
