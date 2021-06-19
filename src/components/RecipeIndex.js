import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/recipeActions'
class recipeIndex extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }
    render() {
        return (
            <div>
                <h1>Recipes</h1>
                {this.props.recipes.map((recipe=> (
                    <RecipeListItem recipe={recipe}/>
                )))}
            </div>
        )
    }
}
    const mapStateToProps = ({recipes}) => {
        return{
            recipes: recipes.all,
        };
    };
export default connect(mapStateToProps, { getRecipes })(recipeIndex);
