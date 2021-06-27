import React from 'react'

const RecipeShow = (props) => {
    // let recipe = props.recipes[props.match.param.id -1]
    let recipe = props.recipes.filter(recipe => recipe.id == parseInt(props.match.params.id))[0]
// console.log('in recipeshow', props)
    return (
        <div>
            <p>in RecipeShow</p>
            <h2>
    
                {/* {recipe ? recipe.name : null} - {recipe ? recipe.dietary_type : null} */}
                {recipe } - {recipe.name}
            </h2>
        </div>
    )
}

export default RecipeShow

