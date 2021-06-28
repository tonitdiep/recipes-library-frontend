import React from 'react'
// import {Redirect} from 'react-router-dom'
const RecipeShow = (props) => {
    let recipe = props.recipes[props.match.param.id - 1]
    // let recipe = props.recipes.filter(recipe => recipe.id === props.match.params.id)[0]
    console.log(props)
    return (
        <div>
            <p>in RecipeShow</p>
            <h2>
                {/* {recipe ? null : <Redirect to='/recipes'/>} */}
                {recipe ? recipe.name : null && recipe.name ? recipe.dietary_type : null}
                {/* {recipe  && recipe.name} */}
            </h2>
        </div>
    )
}

export default RecipeShow

