import React from 'react'
import RecipeShow from '../components/RecipeShow'
import RecipeList from '../components/RecipeList'
import {Link} from 'react-router-dom'
const StarredContainer = (props) => {
    console.log('inside starred container', props)
    debugger
    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
    // let recipes = props.recipes.filter(recipe => recipe.starred === true)

    return (

        <div>
            <h2>StarredContainer</h2>
            Starred Recipe: {recipe.starred ? "Checked Recipe" : "Not A Fav"}
            
             {/* {<ul>

                {props.recipes && props.recipes.filter(recipe => 
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}> {recipe.name}</Link>
                    </li>
        
                )}
            </ul>}  */}
            
        </div>
    )
}

export default StarredContainer

