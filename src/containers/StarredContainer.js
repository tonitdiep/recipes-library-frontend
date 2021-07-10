// import React, { Component } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const StarredContainer = (props) => {
    console.log('inside starred container', props.recipes)
    debugger
    // let recipes = props.recipes.map(recipe => recipe.id && recipe.starred === true)
debugger
    return (
        <div>
            <h2>StarredContainer</h2>

            {/* Starred Recipe: {recipes.starred ? "Checked Recipe" : "Not A Fav"} */}
                {/* Starred Recipe: {recipes.id === recipes.starred ? "Checked Recipe" : "Not A Fav"}
                {recipes.id && recispes.starred === true}  */}
            
            <ul>
                {
            
                props.recipes && props.recipes.filter( recipe => 
                    // recipe.id && recipe.starred === true
                    {recipe.name && recipe.starred === true}
                ).map(
                    <li key={recipe.id}>
                    {/* <Link to={`/recipes/${recipe.id}`}>  */}
                     {/* {recipe.name && recipe.starred === true} */}
                    {/* </Link><br/><br/>  */}
                 </li>
                )
              
                
                } 
            </ul>

         </div>
    )
}
const mapStateToProps = (state) => {
debugger
console.log("sc mapState", state)
    return{
        recipes: state.recipes
    };
};
export default connect(mapStateToProps)(StarredContainer)

