import React from 'react'
// import {connect} from 'react-redux'
// import React, { Component } from 'react'

//  class RecipeShow extends Component {
    
//     render() {
//         // let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

//         return (
//             <div>
//             <h2>
//                 <h3>Recipe Details</h3>
//                 Name: {this.props.recipe ? this.props.recipe.attributes.name : null}<br/>
//                 Cook Time: {this.props.recipe ? this.props.recipe.attributes.cook_time : null} minutes <br/> 
//                 Cuisine Country: {this.props.recipe ? this.props.recipe.attributes.cuisine_country : null}<br/> 
//                 Dietary Type: {this.props.recipe ? this.props.recipe.attributes.dietary_type : null}<br/>
                
//                 Rating: {this.props.recipe ? this.props.recipe.attributes.rating : null}<br/>
//                 {/* Rating: {recipe.rating ? ratingValue[recipe.rating] : null}<br/> */}

//                 Skill Level: {this.props.recipe ? this.props.recipe.attributes.skill_level : null}<br/>

//                 Serving Size: {this.props.recipe ? this.props.recipe.attributes.serving_size : null}<br/>
//                 Spice Level: {this.props.recipe ? this.props.recipe.attributes.spice_level : null}<br/>
//                 Starred: {this.props.recipe ? this.props.recipe.attributes.starred : null}

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
// export default connect(mapStateToProps)(RecipeShow)


const RecipeShow = (props) => {
    debugger
    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    console.log("inside show component")
    // let ratingValue = props.recipes[props.match.params.id -1]
    // let spice_txt = ["no spice", "some spice", "lotta spice"]
    return (
        <div>
            <h2>
                <h3>Recipe Details</h3>
                Name: {recipe ? recipe.attributes.name : null}<br/>
                Cook Time: {recipe ? recipe.attributes.cook_time : null} minutes <br/> 
                Cuisine Country: {recipe ? recipe.attributes.cuisine_country : null}<br/> 
                Dietary Type: {recipe ? recipe.attributes.dietary_type : null}<br/>
                
                Rating: {recipe ? recipe.attributes.rating : null}<br/>
                {/* Rating: {recipe.rating ? ratingValue[recipe.rating] : null}<br/> */}

                Skill Level: {recipe ? recipe.attributes.skill_level : null}<br/>

                Serving Size: {recipe ? recipe.attributes.serving_size : null}<br/>
                Spice Level: {recipe ? recipe.attributes.spice_level : null}<br/>
                Starred: {recipe ? recipe.attributes.starred : null}

            </h2>
        </div>
    )
}

export default RecipeShow

