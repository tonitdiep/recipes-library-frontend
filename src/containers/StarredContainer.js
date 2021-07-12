
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'

const StarredContainer = (props) => {
    console.log('inside starred container', props.recipes)
    return (
        <div>
            <h2>StarredContainer</h2> 
            <ul>
                {
            
                props.recipes && props.recipes.map(recipe => 
                    <li key={recipe.id}>

                     
                   
                     Recipe Name: {recipe ? recipe.name : null}<br/>
                     <Link to={`/recipes/${recipe.id}`}> 
                     Starred Value: {recipe.name && recipe.starred === true ? "Recipe Favorite!" : "Not A Fav"}
                    </Link><br/><br/> 
                 </li>
                )} 
            </ul>
         </div>
    )
}
const mapStateToProps = (state) => {
    return { 
        recipes: state.recipes
    };
};
export default connect(mapStateToProps, {fetchRecipes})(StarredContainer)

