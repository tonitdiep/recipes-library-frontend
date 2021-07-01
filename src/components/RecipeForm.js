import React, { Component } from 'react'
import {addRecipe} from '../actions/addRecipe'
import {connect} from "react-redux";
class RecipeForm extends Component {
    state = {
        name: '',
        cuisine_country: '',
        dietary_type: '',
        cook_time: null,
        spice_level: null,
        rating: null,
        serving_size: null,
        skill_level: null,
        starred: 0 

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
            spice_level: null,
            rating: null,
            serving_size: null,
            skill_level: null,
            starred: 0
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        
        return (
            <div>

                <form onSubmit={this.handleOnSubmit}>
                <h3>Add Recipe Form</h3>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                <label>Cusine Country: </label>
                <input type="text" value={this.state.cuisine_country} name="cuisine_country" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                <label>Dietary Type: </label>
                <input type="text" value={this.state.dietary_type} name="dietary_type" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                
                <label>Cook Time: </label>
                <input type="number" value={this.state.cook_time}   min="1" max="59" name="cook_time" onChange={(event) => this.handleOnChange(event)}/> minutes<br/><br/>
                
                <label>Spice Level: </label>
                <select type="number" value={this.state.spice_level} name="spice_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">*</option>
                    <option value="1">**</option>
                    <option value="2">***</option>
                </select><br/><br/>
                
                <label>Rating: </label>     
                <input type="number" value={this.state.rating} min="0" max="4" name="rating" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                
                <label>Servings: </label>
                <input type="number" value={this.state.serving_size} name="serving_size" min="0" max="2" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                
                <label>Skill Level: </label>
                <select  type="text" value={this.state.skill_level} name="skill_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">Easy</option>
                    <option value="1">Moderate</option>
                    <option value="2">Arduous</option>
                </select><br/><br/>
                
                <label>Starred Recipe </label>
                <input type="checkbox" value={this.state.starred} name="starred" onChang={(event) => this.handleOnChange(event)}/><br/><br/>
                
                <input type="submit" value="Submit Recipe"/>
                {/* {this.state.recipes} */}
                </form>
                
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({

// //         // loadRecipe: loadRecipe => dispatch({ type: "LOAD_RECIPE"}),
// //         fetchRecipes: recipeLoaded => dispatch ({type: "FETCH_RECIPES"}),
//         addRecipe: addRecipe => dispatch({ type: "ADD_RECIPE"})

// })
export default connect(null, {addRecipe})(RecipeForm);
