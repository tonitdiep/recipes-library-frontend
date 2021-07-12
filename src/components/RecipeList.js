import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'

const RecipeList = (props) => {

  const handleDelete = (recipe) => {
     props.deleteRecipe(recipe.id)
  }

  return (
    <div>
      <h2>List of Recipes</h2>
      <ul>
        {
          
          props.recipes && props.recipes.map( recipe =>

            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link><br/>
              <button onClick={() => handleDelete(recipe)}>X</button> {""}
            </li>
          )
        } 
      </ul>
      <Link exact to={`/recipes/new`}>Add New Recipe</Link><br/>
  
      <hr/>
    </div>
  )
}

export default connect(null, {deleteRecipe})(RecipeList)


