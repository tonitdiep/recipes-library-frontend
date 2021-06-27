import React from 'react'

const RecipeShow = (props) => {
    let recipe = props.recipes[props.match.param.id -1]
    console.log("in RecipeShow", props)
    return (
        <li>
            {recipe ? recipe.name : null} - {recipe ? recipe.dietary_type : null}
        </li>
    
    )
}

export default RecipeShow

