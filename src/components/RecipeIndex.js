import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/recipeActions'

class recipeIndex extends Component {
    // componentDidMount() {
    //     debugger
    //     this.props.getRecipes();
    // }
    render() {
        return (
            <div>
                <h1>Recipes</h1>
                {/* {this.props.recipes.map((recipe=> (
                    <RecipeListItem recipe={recipe}/>
                )))}
                <RecipeListItem/> */}
            </div>
        )
    }
}
    const mapStateToProps = (recipes) => {
        debugger
        return{
            recipes: recipes.all,
        };
    };
export default connect(mapStateToProps, { getRecipes })(recipeIndex);
