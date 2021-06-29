import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'

const RecipeList = (props) => {
  // debugger
  //  const recipes = props.recipes.map((recipe) => {
  // return <li key={recipe.id}></li>})

  const handleDelete = (recipe) => {
     props.deleteRecipe(recipe.id)
  }

  return (
    <div>
      <ul>
        {
          props.recipes && props.recipes.map( recipe =>
          // props.recipes.map( recipe =>
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
              <button onClick={() => handleDelete(recipe)}>X</button>
            </li>
          )
        }
      </ul>
      {/* [+] New Recipe Link Here<br/> */}
      <Link to={`/recipes/new`}>Add New Recipe</Link>
      <hr/>
    </div>
  )
}

export default connect(null, {deleteRecipe})(RecipeList)


