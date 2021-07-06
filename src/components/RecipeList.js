import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import {editRecipe} from '../actions/editRecipe'
const RecipeList = (props) => {
  // debugger
  //  const recipes = props.recipes.map((recipe) => {
  // return <li key={recipe.id}></li>})

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
          // props.recipes.map( recipe =>
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
              {/* <Link to={`/recipes/${recipe.id}`}> {recipe.attributes.name} </Link> */}
              <button onClick={() => handleDelete(recipe)}>X</button>
              <button onClick={() => handleEdit(recipe)}>Edit</button>
            </li>
          )
        }
      </ul>
      {/* [+] New Recipe Link Here<br/> */}    <Link exact to={`/recipes/new`}>Add New Recipe</Link>
      <Link exact to={`/recipes/new`}>Add New Recipe</Link>
      <hr/>
    </div>
  )
}

export default connect(null, {deleteRecipe, editRecipe})(RecipeList)


