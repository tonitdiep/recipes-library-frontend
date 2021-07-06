import React from 'react'

import {Link} from 'react-router-dom'

const RecipeShow = (props) => {

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

debugger

    let dietChoice = ["Keto", "Low-Carb"]
    let ratingValue = ["*", "**", "***", "****", "*****"]
    let servingCount = ["One", "Two", "Three"]
    let spice_txt = ["Mild", "Hot", "Super Hot"]
    let skills = ["Easy", "Moderate", "Arduous"]


    return (
        <div>
         
            <h2>
                <h3>Recipe Details</h3>
                Name: {recipe ? recipe.name : null}<br/>
                Cook Time: {recipe ? recipe.cook_time : null} minutes <br/> 
                Cuisine Country: {recipe ? recipe.cuisine_country : null}<br/> 
                Dietary Type: {recipe ? dietChoice[recipe.dietary_type] : null}<br/>
                
                Rating: {recipe ? ratingValue[recipe.rating] : null}<br/>

                Skill Level: {recipe ? skills[recipe.skill_level] : null}<br/>

                Servings: {recipe ? servingCount[recipe.serving_size] : null}<br/>
                Spice Level: {recipe ? spice_txt[recipe.spice_level] : null}<br/>
                Starred Recipe: {recipe.starred ? <p>Checked Recipe</p> : <p>Not A Fav</p>  }
            </h2>
            <Link exact to={`/recipes/`}>Back To Recipes Library</Link>
        </div>
    )
}

export default RecipeShow

