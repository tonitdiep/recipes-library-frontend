import React, {Component} from 'react'

class RecipeList extends Component {

    //     debugger
    // ListRecipe = () => {
    //     debugger
    //     return this.props.recipe.map((recipe) => <li key={recipe.id} ><button id={recipe.id}>EEE</button></li> )
    // }
    render() {
        const recipes = props.recipes.map ((recipe) => {
        return <li key={recipe.id}>{recipe.name}</li>})

        return (
            <div>
                {/* <ul> {this.ListRecipe ? <h2>loading...</h2> : this.recipes}</ul> */}
            <ul>{recipes}</ul>
                 {/* <ul>{this.props.loading ? <h3>Loading...</h3> : recipes}</ul> */}
            </div>
        )
    }

}
export default RecipeList;


// import React from 'react'
// const RecipeList = (props) => {
//     console.log(props)
//             const recipes = this.props.recipes[0].map((recipe) => {
//           return <li key={recipe.id}>{recipe.name}</li>
//         })
//     return (
//         <div>
//           <h2>Recipe List</h2><hr/>
//           <ul>{recipes}</ul>

//         </div>
//     )
// }

// export default RecipeList



