// import React from 'react'

import React, { Component } from 'react'
// import { connect } from 'react-redux';

//  class RecipeShow extends Component {
    
//     render() {
//         let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
//         return (
            
//             <div>
//             <h2>
//                 <h3>Recipe Details</h3>
//                 Name: {recipe ? this.props.recipe.name : null}<br/>
//                 Cook Time: {recipe ? this.props.recipe.cook_time : null} minutes <br/> 
//                 Cuisine Country: {recipe ? this.props.recipe.cuisine_country : null}<br/> 
//                 Dietary Type: {recipe ? this.props.recipe.dietary_type : null}<br/>
                 
//                 Rating: {recipe ? this.props.recipe.rating : null}<br/> 
//                 {/* Rating: {recipe.rating ? ratingValue[recipe.rating] : null}<br/> */}

//                 Skill Level: {recipe ? this.props.recipe.skill_level : null}<br/>

//                 Serving Size: {recipe ? this.props.recipe.serving_size : null}<br/>
//                 Spice Level: {recipe ? this.props.recipe.spice_level : null}<br/>
//                 Starred: {recipe ? this.props.recipe.starred : null}

//             </h2>
//             </div>
//         )
//     }
// }
//     const mapStateToProps = (state) => {
//         // console.log('index map', recipes)
//         return{

//             recipe: state.recipes.filter(recipe => recipe.id === this.props.match.params.id)[0]

//         };
//     };
//            // let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

// // export default connect(mapStateToProps)(RecipeShow)
// export default (RecipeShow)


const RecipeShow = (props) => {
    debugger
    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    console.log("inside show component", props.recipe)
    let ratingValue = props.recipes[props.match.params.id]
    // let spice_txt = ["no spice", "some spice", "lotta spice"]
    return (
        <div>
            <h2>
                <h3>Recipe Details</h3>
                Name: {recipe ? recipe.name : null}<br/>
                Cook Time: {recipe ? recipe.cook_time : null} minutes <br/> 
                Cuisine Country: {recipe ? recipe.cuisine_country : null}<br/> 
                Dietary Type: {recipe ? recipe.dietary_type : null}<br/>
                
                {/* Rating: {recipe ? [recipe.rating] : null}<br/> */}
                Rating: {recipe ? ratingValue[recipe.rating - 1] : null}<br/>

                Skill Level: {recipe ? recipe.skill_level : null}<br/>

                Serving Size: {recipe ? recipe.serving_size : null}<br/>
                Spice Level: {recipe ? recipe.spice_level : null}<br/>
                Starred: {recipe ? recipe.starred : null}

            </h2>
        </div>
    )
}

export default RecipeShow

