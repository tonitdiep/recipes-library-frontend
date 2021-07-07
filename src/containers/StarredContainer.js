import React from 'react'
import RecipeShow from '../components/RecipeShow'
import RecipeList from '../components/RecipeList'
import {Link} from 'react-router-dom'
const StarredContainer = (props) => {
    console.log('inside starred container', props)
//    const recipes = props.recipes.map((recipe) => {
//   return <li key={recipe.id}></li>})
//   let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

// let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
    return (
        <div>
            <h2>StarredContainer</h2>
            {/* <RecipeList/> */}
            {/* <ul> */}
            {/* {recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]} */}
                {/* {recipe.starred} */}
            {/* {props.recipes && props.recipes.starred.filter(recipe => */}
                {/* <li key={recipe.id}> */}
                    {/* <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link> */}
                {/* </li> */}
            {/* )} */}
            {/* </ul> */}
        </div>
    )
}

export default StarredContainer
