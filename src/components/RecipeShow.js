import React from 'react'

const RecipeShow = (props) => {

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
                <h3>Recipe Details</h3>
                Name: {recipe ? recipe.name : null}<br/>
                Rating: {recipe ? recipe.rating : null}<br/>
                Dietary Type: {recipe ? recipe.dietary_type : null}<br/>
                Cook Time: {recipe ? recipe.cook_time : null} minutes <br/> 
                Cuisine Country: {recipe ? recipe.cuisine_country : null}<br/> 
                Skill Level: {recipe ? recipe.skill_level : null}<br/>
                Serving Size: {recipe ? recipe.serving_size : null}<br/>
                Spice Level: {recipe ? recipe.spice_level : null}<br/>
                Starred: {recipe ? recipe.starred : null}

            </h2>
        </div>
    )
}

export default RecipeShow

