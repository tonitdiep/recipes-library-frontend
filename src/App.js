// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getRecipes} from './actions/recipeActions'
import RecipleListItem from './components/RecipeListItem';
import RecipeForm from './components/RecipeForm';
import RecipeListItem from './components/RecipeListItem';

class App extends Component {

  componentDidMount() {
    debugger
    console.log(this.props)
    this.props.goGetRecipes()
  }
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <RecipleListItem recipes={this.props.recipes}/>
    }
  }
  
  render() {
  return (
    <div className="App">
      <h3>Recipes Library</h3>
      {this.props.recipes}
      {this.handleLoading}
      <RecipeForm/>
      <RecipeListItem/>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
