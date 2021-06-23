import React, {Component} from 'react'

class RecipeListItem extends Component {
    // const recipes = props.recipes.map (recipe =>
    //     <recipeActions key={recipe.id}/>)
    //     debugger
    ListRecipe = () => {
        debugger
        return this.props.recipes.map((recipe, i ) => <li key={i} >{recipe.name}<button id={recipe.id}>eeeX</button></li> )
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