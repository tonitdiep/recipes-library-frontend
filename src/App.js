// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getRecipes} from './actions/recipeActions'
import {addRecipe} from './actions/recipeActions'
// import RecipleListItem from './components/RecipeListItem';
import RecipeForm from './components/RecipeForm';


class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getRecipes()
    this.props.goAddRecipe()
    // this.props.addRecipe()
  }
  // handleLoading = () => {
  //   debugger
  //   if(this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return <RecipleListItem recipes={this.props.recipes}/>
  //   }
  // }
  
  render() {
    debugger
        const recipes = this.props.recipes.map((recipe, i) => {
          return <li key={i}>{recipe.id}</li>
        })
    
        
    return (
        <div className="App">
          <h1>Recipes Library</h1>

          <ul>{this.props.loading ? <h3>Loading...</h3> : recipes}</ul>
        {/* <RecipleListItem/> */}
          
          <hr/>        
            <h3>Compose A Recipe</h3>
            <RecipeForm/>
          <hr/>
      
        </div>
  );
}
}
const mapStateToProps = (state) => {
  console.log("inside app.js", state)
  return {
    recipes: state.recipes,
    loading: state.loading
  }
} 
const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    getRecipes: () => dispatch(getRecipes()),
    goAddRecipe: () => dispatch(addRecipe())
    // addRecipe: name => dispatch({type: "ADD_RECIPE", name})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
