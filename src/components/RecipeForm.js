import React, { Component } from 'react'
import { createRecipe } from "../actions/recipeActions";
import {connect} from "react-redux";
class RecipeForm extends Component {
    state = {
        name: ""
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createRecipe(this.state);
        this.setState({
            name: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                inside this form
                {this.state.recipes}
                </form>
                
            </div>
        )
    }
}

const mpaDispatchToProps = dispatch => ({
        load_recipe: load_recipe => dispatch({ type: "LOAD_RECIPE"})
})
export default connect(null, mpaDispatchToProps)(RecipeForm);