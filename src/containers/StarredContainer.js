import React from 'react'
import RecipeShow from '../components/RecipeShow'
import {Link} from 'react-router-dom'
const StarredContainer = (props) => {
//    const recipes = props.recipes.map((recipe) => {
//   return <li key={recipe.id}></li>})
//   let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
console.log("in starred container", props)
    return (
        <div>
            <h2>StarredContainer</h2>
            <ul>
            {props.recipes && props.recipes.starred.filter(recipe =>
                <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
                </li>
            )}
            </ul>
        </div>
    )
}

export default StarredContainer
