import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'

const RecipeList = (props) => {
// debugger
            // const recipes = props.recipes.map((recipe) => {
          // return <li key={recipe.id}></li>
        // }) 
       const handleDelete = (recipe) => {
         debugger
          props.deleteRecipe(recipe.id)
        }
    return (
      
        <div>
          <hr/>
          <h2>Recipe List</h2>
          {props.recipes.map(recipe => 

                <li key={recipe.id}> 
                  <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
                  {/* <br/>{recipe.dietary_type} */}
                  {/* <RecipeShow recipe={recipe}/> */}
                  <button onClick={() => handleDelete(recipe)}>DeLeTe {recipe.name}</button>

              </li>
              

              )}
            <hr/>

        </div>
    )
}

export default connect(null, {deleteRecipe})(RecipeList)



