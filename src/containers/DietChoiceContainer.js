import React from 'react'
import RecipeForm from '../components/RecipeForm'
import RecipeList from '../components/RecipeList'
import RecipeShow from '../components/RecipeShow'
const DietChoiceContainer = (props) => {
    debugger
    // let starredRecipes = props.recipes.filter(recipe => recipe.id)
    return (
        <div>

            <h1> DietChoiceContainer </h1>
            <RecipeForm recipeForm={this.props.recipe && this.props.recipe.dietary_type}/>
            
        </div>

      
        
    )
}

export default DietChoiceContainer

