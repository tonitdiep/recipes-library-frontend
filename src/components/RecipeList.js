import React from 'react'
import {Link} from 'react-router-dom'

const RecipeList = (props) => {
// debugger
            // const recipes = props.recipes.map((recipe) => {
          // return <li key={recipe.id}></li>
        // }) 
    return (
      
        <div>
          <hr/>
          <h2>Recipe List</h2>
          {props.recipes.map(recipe => 

                <li key={recipe.id}> 
                  <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
                  {/* <br/>{recipe.dietary_type} */}
                  {/* <RecipeShow recipe={recipe}/> */}
              </li>)}
            <hr/>

        </div>
    )
}

export default RecipeList



