import React from 'react'

const RecipeShow = (props) => {

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
        
                {recipe ? recipe.name : null}<br/>
                {recipe ? recipe.dietary_type : null}<br/>
                {recipe ? recipe.cook_time : null} minutes <br/> 
                {recipe ? recipe.cuisine_country : null}<br/> 
                {recipe ? recipe.skill_level : null}

                {/* {recipe  && recipe.name} */}
            </h2>
        </div>
    )
}

export default RecipeShow

