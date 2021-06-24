import React, { Component } from 'react'
// import {createRecipe} from '../actions/recipeActions'
import {addRecipe} from '../actions/recipeActions'
import {connect} from "react-redux";
class RecipeForm extends Component {
    state = {
        name: '',
        cuisine_country: '',
        dietary_type: '',
        time_to_cook: '',
        spice_level: '',
        serviing_size: '',
        skill_level: ''

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            name: '',
            cuisine_country: '',
            dietary_type: '',
            time_to_cook: '',
            spice_level: '',
            serviing_size: '',
            skill_level: ''
        })
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.cuisine_country]: event.target.value,
            [event.target.dietary_type]: event.target.value,
            [event.target.time_to_cook]: event.target.value,
            [event.target.spice_level]: event.target.value,
            [event.target.serving_size]: event.target.value,
            [event.target.skill_level]: event.target.value
        });
    }
    render() {
        
        return (
            <div>
                {/* <form onSubmit={this.props.addRecipe}> */}
                <form onSubmit={this.handleOnSubmit}>
                <p>Inside submit recipe form</p>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Cusine Country: </label>
                <input type="text" value={this.state.cuisine_country} name="cuisine_country" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Dietary Type: </label>
                <input type="text" value={this.state.dietary_type} name="dietary_type" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Cook Time: </label>
                <input type="integer" value={this.state.time_to_cook} name="time_to_cook" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Spice Level: </label>

                <select type="text" value={this.state.spice_level} name="spice_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">Select Spice Level:</option>
                    <option value="1">None</option>
                    <option value="2">Mild</option>
                    <option value="3">Spicy</option>
                    <option value="4">Deadly Spicy</option>
                </select><br/>

                <label>Serving Size: </label>
                <input type="integer" value={this.state.serving_size} name="serving_size" onChange={(event) => this.handleOnChange(event)}/><br/>
                <label>Skill Level: </label>
                <input type="text" value={this.state.skill_level} name="skill_level" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                <input type="submit"/>
                {/* {this.state.recipes} */}
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({

        loadRecipe: loadRecipe => dispatch({ type: "LOAD_RECIPE"}),
        recipeLoaded: recipeLoaded => dispatch ({type: "RECIPE_LOADED"}),
        addRecipe: addRecipe => dispatch({ type: "ADD_RECIPE"})

})
export default connect(mapDispatchToProps, {addRecipe})(RecipeForm);
// export default (RecipeForm);