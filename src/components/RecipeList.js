// import React, {Component} from 'react'

// class RecipeListItem extends Component {

//     //     debugger
//     // ListRecipe = () => {
//     //     debugger
//     //     return this.props.recipe.map((recipe) => <li key={recipe.id} ><button id={recipe.id}>EEE</button></li> )
//     // }
//     render() {
//         const recipes = props.recipes.map (recipe =>
//             <recipeActions key={recipe.id}/>)
//         return (
//             <div>
//                 {/* <ul> {this.ListRecipe ? <h2>loading...</h2> : this.recipes}</ul> */}
 
//                  <ul>{this.props.loading ? <h3>Loading...</h3> : recipes}</ul>
//             </div>
//         )
//     }

// }
// export default RecipeListItem;


import React from 'react'

const RecipeListItem = (props) => {
    console.log(props)
    return (
        <div>
          <h2>Recipe List</h2><hr/>
        </div>
    )
}

export default RecipeListItem

// import React from "react";

// export default function RecipeListItem({ recipe }) {
//           const recipes = this.props.recipes.map((recipe) => {
//           return <li key={recipe.id}>{recipe.name}</li>
//         })
    
//   return (
//     <div>
//       {recipe.id} 
//     </div>
//   );
// }