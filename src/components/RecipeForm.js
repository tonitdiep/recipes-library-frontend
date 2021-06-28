import React, { Component } from 'react'
// import {createRecipe} from '../actions/recipeActions'
import {addRecipe} from '../actions/addRecipe'
import {connect} from "react-redux";
class RecipeForm extends Component {
    state = {
        name: '',
        cuisine_country: '',
        dietary_type: '',
        cook_time: null,
        spice_level: '',
        rating: null,
        serving_size: null,
        skill_level: ''

    }
    handleOnSubmit = (event) => {
        alert('A recipe was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            name: '',
            cuisine_country: '',
            dietary_type: '',
            cook_time: null,
            spice_level: '',
            rating: null,
            serving_size: null,
            skill_level: ''
        })
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.cuisine_country]: event.target.value,
            [event.target.dietary_type]: event.target.value,
            [event.target.cook_time]: event.target.value,
            [event.target.spice_level]: event.target.value,
            [event.target.rating]: event.target.value,
            [event.target.serving_size]: event.target.value,
            [event.target.skill_level]: event.target.value
        });
    }
    render() {
        
        return (
            <div>
                {/* <form onSubmit={this.props.addRecipe}> */}
                <form onSubmit={this.handleOnSubmit}>
                <h3>Add Recipe Form</h3>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Cusine Country: </label>
                <input type="text" value={this.state.cuisine_country} name="cuisine_country" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Dietary Type: </label>
                <input type="text" value={this.state.dietary_type} name="dietary_type" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Cook Time: </label>
                <input type="number" value={this.state.cook_time} name="cook_time" onChange={(event) => this.handleOnChange(event)}/> minutes<br/>
                <label>Spice Level: </label>

                <select type="text" value={this.state.spice_level} name="spice_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">Select Spice Level:</option>
                    <option value="1">None</option>
                    <option value="2">Mild</option>
                    <option value="3">Spicy</option>
                    <option value="4">Deadly Spicy</option>
                </select><br/>
                <label>Rating: </label>
                
                <input type="number" value={this.state.rating} step="0.01" min="1" max="5" name="rating" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Serving Size: </label>
                <input type="number" value={this.state.serving_size} name="serving_size" step="0.01" min="0" max="5" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Skill Level: </label>
                <input type="text" value={this.state.skill_level} name="skill_level" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                <input type="submit" value="Submit Recipe"/>
                {/* {this.state.recipes} */}
                </form>
                
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({

//         // loadRecipe: loadRecipe => dispatch({ type: "LOAD_RECIPE"}),
//         fetchRecipes: recipeLoaded => dispatch ({type: "FETCH_RECIPES"}),
//         addRecipe: addRecipe => dispatch({ type: "ADD_RECIPE"})

// })
export default connect(null, {addRecipe})(RecipeForm);
