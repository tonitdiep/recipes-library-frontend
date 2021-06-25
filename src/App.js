// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import RecipleListItem from './components/RecipeListItem';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';


class App extends Component {
  // componentDidMount() {
  //   console.log(this.props)
  //   this.props.fetchRecipes()
  //   this.props.addRecipe()
  //   // this.props.addRecipe()
  // }
  // addRecipe = () => {
  //   debugger
  //   this.props.RecipeForm()
  // }
  // handleLoading = () => {
  //   debugger
  //   if(this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return <RecipleListItem recipes={this.props.recipes}/>
  //   }
  // }
  
  render() {
    console.log("app render")
        // const recipes = this.props.recipes.map((recipe) => {
        //   return <li key={recipe.id}>{recipe.name}</li>
        // })
    
        
    return (
        <div className="App">
          <h1>Recipes Library</h1>
          <RecipeContainer/>
          {/* <ul>{this.props.loading ? <h3>Loading...</h3> : recipes}</ul> */}
        <RecipleListItem/>
          {/* {this.props.addRecipe} */}
          <hr/>        
            <h3>Compose A Recipe</h3>
            {/* <RecipeForm addRecipe={this.props.addRecipe}/> */}
            <RecipeForm addRecipe={this.props.addRecipe} /> 
          <hr/>
      
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
