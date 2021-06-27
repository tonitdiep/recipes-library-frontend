import React from 'react'
import {Redirect} from 'react-router-dom'
const RecipeShow = (props) => {
    let recipe = props.recipes[props.match.param.id - 1]
    // let recipe = props.recipes.filter(recipe => recipe.id === props.match.params.id)[0]
    console.log(recipe)
    return (
        <div>
            <p>in RecipeShow</p>
            <li>
                {recipe ? null : <Redirect to='/recipes'/>}
                {recipe ? recipe.name : null} 
                {/* - {recipe ? recipe.dietary_type : null} */}
                {/* {recipe } - {recipe.name} */}
            </li>
        </div>
    )
}

export default RecipeShow

