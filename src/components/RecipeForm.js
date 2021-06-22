import React, { Component } from 'react'
import { createRecipe } from "../actions/recipeActions";
import {connect} from "react-redux";
class RecipeForm extends Component {
    state = {
        name: ''
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createRecipe(this.state);
        this.setState({
            name: ''
        })
    }

    handleOnChange(event) {
        this.setState({
            name: event.target.value,
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                inside this form
                <input
                    type="text"
                    value={this.state}
                    onChange={(event) => this.handleOnChange(event)}
                />
                <input type="submit"/>
                {/* {this.state.recipes} */}
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({

        load_recipe: load_recipe => dispatch({ type: "LOAD_RECIPE"}),
        add_recipe: add_recipe => dispatch ({type: "ADD_RECIPE"})

})
export default connect(mapDispatchToProps, {createRecipe})(RecipeForm);