import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import {editRecipe} from '../actions/editRecipe'
const RecipeList = (props) => {


  const handleDelete = (recipe) => {
     props.deleteRecipe(recipe.id)
  }

  const handleEdit = (recipe) => {
    props.editRecipe(recipe.id)
 }
  return (
    <div>
      <h2>List of Recipes</h2>
      <ul>
        {
          
          props.recipes && props.recipes.map( recipe =>

            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
              <button onClick={() => handleDelete(recipe)}>X</button>
              <button onClick={() => handleEdit(recipe)}>Edit</button>
            </li>
          )
        }
      </ul>
      <Link exact to={`/recipes/new`}>Add New Recipe</Link><br/>
      {/* <Link exact to={`/recipes/id/`}>Edit Recipe</Link> */}
      <hr/>
    </div>
  )
}

export default connect(null, {deleteRecipe, editRecipe})(RecipeList)


