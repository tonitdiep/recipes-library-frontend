import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const StarredContainer = (props) => {
    console.log('inside starred container', props.recipes)
    debugger
    // let recipes = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]
    let recipes = props.recipes.filter(recipe => recipe.id && recipe.starred === true)
debugger
    return (

        <div>
            <h2>StarredContainer</h2>

                {/* Starred Recipe: {recipes.id === recipes.starred ? "Checked Recipe" : "Not A Fav"} */}
                {props.recipes && props.match}
                {/* <ul>
                    {props.recipes && props.recipes.filter(recipe =>  
                        
                    <li key={recipes.id}>
                        <Link to={`/recipes/${recipes.id}`}> {recipes.name}</Link> 
                    </li>   
                    )}
                </ul>  */}
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

