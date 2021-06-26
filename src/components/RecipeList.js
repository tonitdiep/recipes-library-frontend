// import React, {Component} from 'react'
// import fetchRecipes from '../actions/fetchRecipes'
// import {connect} from 'react-redux'
// class RecipeList extends Component {

//     //     debugger
//     // ListRecipe = () => {
//     //     debugger
//     //     return this.props.recipe.map((recipe) => <li key={recipe.id} ><button id={recipe.id}>EEE</button></li> )
//     // }
//       // listRecipe = () => {
//       //   this.props.recipes.map((recipe) => {
//       //     return <li key={recipe.id}>{recipe.name}</li>})
//       // }
//       // const recipes = this.props.recipes.map((recipe) => {
//         //   return <li key={recipe.id}>{recipe.name}</li>
//         // })
// //  handleLoading = () => {
// //     debugger
// //     if(this.props.loading) {
// //       return <div>Loading...</div>
// //     } else {
// //       return {this.props.fetchRecipes()}
// //     }
// //   }
//     render() {
//       //  const recipes = this.props.recipes.map((recipe) => {
//       //     return <li key={recipe.id}>{recipe.name}</li>
//       //   })
//         return (
//             <div>
              
//               <h2>Recipe List</h2>
//               {/* {this.handleLoading} */}
//                 {/* <ul> {this.props.loading ? <h2>loading...</h2> : recipes}</ul> */}
//             {/* <ul>{recipes}</ul> */}
//                  {/* { this.listRecipe} */}
//             </div>
//         )
//     }

// }

// const mapStateToProps = (state) => {
//   console.log("inside app.js", state)
//   return {
//     recipes: state.recipes,
//     loading: state.loading
//   }
// } 
// const mapDispatchToProps = (dispatch) => {
  
//   return {
//     fetchRecipes: () => dispatch(fetchRecipes()),
//     // addRecipe: () => dispatch(addRecipe())
//     // addRecipe: recipe => dispatch({type: "ADD_RECIPE", recipe})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);


import React from 'react'
// import {Link} from 'react-router-dom'
const RecipeList = (props) => {
    console.log(props)
        //     const recipes = props.recipes.map((recipe) => {
        //   return <li key={recipe.id}></li>
        // }) 
    return (
        <div>
          <h2>Recipe List #testing</h2><hr/>
          {props.recipes.map(recipe => 
              <li key={recipe.id}>
                {/* <Link to={`/api/v1/recipes/${recipe.id}`}> {recipe.name}<br/>{recipe.dietary_type} </Link> */}
                {recipe.name}<br/>{recipe.dietary_type}
              
              </li>)}
          {/* {recipes} */}
          {/* <ul>{recipes}</ul> */}

        </div>
    )
}

export default RecipeList



