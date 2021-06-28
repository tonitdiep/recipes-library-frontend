import React from 'react'
// import {Redirect} from 'react-router-dom'
const RecipeShow = (props) => {
    debugger
    let recipe = props.recipes[props.match.params.id - 1]
    // debugger 
    // let recipe = props.recipes.filter(recipe => recipe.id === parseInt( props.match.params.id))[0]
    console.log(recipe)
    return (
        <div>
            <p>in RecipeShow</p>
            <h2>
                {/* {recipe ? null : <Redirect to='/recipes'/>} */}
                {recipe ? recipe.name : null} --- {recipe ? recipe.dietary_type : null}
                {/* {recipe  && recipe.name} */}
            </h2>
        </div>
    )
}

export default RecipeShow

