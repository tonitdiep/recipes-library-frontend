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

    debugger
    // let ratingValue = props.recipes[props.match.params.url]
    let ratingValue = ["*", "**", "***", "****", "*****"]
    let servingCount = ["o", "oo", "ooo"]
    let spice_txt = ["Mild", "Hot", "Super Hot"]
    return (
        <div>
            <h2>
                <h3>Recipe Details</h3>
                Name: {recipe ? recipe.name : null}<br/>
                Cook Time: {recipe ? recipe.cook_time : null} minutes <br/> 
                Cuisine Country: {recipe ? recipe.cuisine_country : null}<br/> 
                Dietary Type: {recipe ? recipe.dietary_type : null}<br/>
                
                {/* Rating: {recipe ? recipe[recipe.rating] : null}<br/> */}
                Rating: {recipe ? ratingValue[recipe.rating] : null}<br/>

                Skill Level: {recipe ? recipe.skill_level : null}<br/>

                Servings: {recipe ? servingCount[recipe.serving_size] : null}<br/>
                Spice Level: {recipe ? spice_txt[recipe.spice_level] : null}<br/>
                Starred: {recipe ? recipe.starred : null}

            </h2>
        </div>
    )
}

export default RecipeShow

