import React from 'react'
// import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'
import {likeRecipe} from '../actions/likeRecipe'
import { upvoteRecipe } from '../actions/upvoteRecipe'

const RecipeList = (props) => {

  const handleDelete = (recipe) => {
     props.deleteRecsipe(recipe.id)
  }

  const likeRecipe = (recipe) => {
    props.likeRecipe(recipe.id)
 }
 const upvoteRecipe = (recipe) => {
  props.upvoteRecipe(recipe.id)
}
  let counter = ""
debugger

  return (
    
    <div>
      <h2>List of Recipes</h2>
      <ul>
        {
          
          props.recipes && props.recipes.map( recipe =>

            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link><br/>
              <button onClick={(recipe) => handleDelete(recipe)}>X</button> {""}
              <button onClick={() => likeRecipe(recipe)}>LIKE!!!</button> {""}
              <button onClick={() => upvoteRecipe(recipe.id)}>upvoteRecipe + </button>
              <button onChange={()=> counter()}>Decrement - </button>
            </li>
          )
        } 
      </ul>
      {/* <div>Votes: {recipe.votes}</div> */}
      <Link exact to={`/recipes/new`}>Add New Recipe</Link><br/>
  
    </div>
  )
}

export default connect(null, {deleteRecipe, likeRecipe, upvoteRecipe})(RecipeList)




// class RecipeList extends Component {
  
//     increaseLike = (e) => {
//       }
//     likeRecipe = (recipe) => {
//           likeRecipe(recipe.id)
//       }
//     handleDelete = (recipe) => {
//         deleteRecipe(recipe.id)
//       }
//   render() {

 

//   // let recipes = recipes && recipes.map(recipe => recipe.id)
//     return (
//     <div>

//       <h2>List of Recipes</h2>

//        <ul>
//      {
          
// //           props.recipes && props.recipes.map( recipe =>

// //             <li key={recipe.id}>
// //               <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link><br/>
// //               <button onClick={(recipe) => handleDelete(recipe)}>X</button> {""}
// //               <button onClick={() => likeRecipe(recipe)}>LIKE!!!</button> {""}
// //               <button onClick={(e) => increaseLike(e)}>Increment + </button>
//               <button>Decrement - </button>
// //             </li>
// //           )
//         } 
//       </ul>



//       <Link exact to={`/recipes/new`}>Add New Recipe</Link><br/>

//     </div>
//     )
//   }
// }


// export default connect(null, fetchRecipes, {deleteRecipe, likeRecipe})(RecipeList)

