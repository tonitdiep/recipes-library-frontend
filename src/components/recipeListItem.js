import React, {Component} from 'react'

class RecipeListItem extends Component {
    // const recipes = props.recipes.map (recipe =>
    //     <recipeActions key={recipe.id}/>)
    //     debugger
    ListRecipe = () => {
        debugger
        return this.props.recipes.map((recipe) => <li key={recipe.id} ><button id={recipe.id}>EEE</button></li> )
    }
    render() {
        return (
            <div>
                {this.ListRecipe} 
            </div>
        )
    }

}
export default RecipeListItem;

// import React from "react";

// export default function RecipeListItem({ recipe }) {
//   return (
//     <div>
//       {this.props.recipe} 
//     </div>
//   );
// }