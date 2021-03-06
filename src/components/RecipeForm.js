import React, { Component } from 'react'
import {addRecipe} from '../actions/addRecipe'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import RecipeShow from './RecipeShow';
class RecipeForm extends Component {
    state = {
        name: '',
        cuisine_country: '',
        dietary_type: 0,
        cook_time: 0,
        spice_level: 0,
        rating: 0,
        serving_size: 0,
        skill_level: 0,
        starred: false
        // redirect: false
    }

    handleOnChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit = (event) => {

        alert('A recipe was submitted ');
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            name: '',
            cuisine_country: '',
            dietary_type: 0,
            cook_time: 0,
            spice_level: 0,
            rating: 0,
            serving_size: 0,
            skill_level: 0,
            starred: false
            // name: '',
            // cuisine_country: '',
            // dietary_type: '',
            // cook_time: '',
            // spice_level: '',
            // rating: '',
            // serving_size: '',
            // skill_level: '',
            // starred: ''
            // redirect: "/recipes/:id"
        })
    }


    render() {
     
        // const redirect = this.state.redirect;

        // if (redirect) {
   
        //     return <Redirect to={this.state.redirect} />;             
        //    }
        
        
// console.log("inside recipeform", this.props.redirect)

        // if (this.props.redirect) {
        //     //this.props.redirected() // another action
        //     return <Redirect to={this.props.redirectTo} />;             
        // }
        return (
            <div>

                <form onSubmit={this.handleOnSubmit}>
                <h3>Add Recipe Form</h3>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
                <label>Cusine Country: </label>
                <input type="text" value={this.state.cuisine_country} name="cuisine_country" onChange={(event) => this.handleOnChange(event)}/><br/><br/>
               
                <label>Dietary Type: </label>
                <select  type="text" value={this.state.dietary_type} name="dietary_type" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">Keto</option>
                    <option value="1">Low-Carb</option>
                </select><br/><br/>

                <label>Cook Time: </label>
                <input type="number" value={this.state.cook_time}   min="1" max="59" name="cook_time" onChange={(event) => this.handleOnChange(event)}/> minutes<br/><br/>
                
                <label>Spice Level: </label>
                <select type="number" value={this.state.spice_level} name="spice_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">*</option>
                    <option value="1">**</option>
                    <option value="2">***</option>
                </select><br/><br/>
                
                <label>Rating: </label>     
                <select type="number" value={this.state.rating}  name="rating" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">1 Star</option>
                    <option value="1">2 Stars</option>
                    <option value="2">3 Stars</option> 
                    <option value="3">4 Stars</option> 
                    <option value="4">5 Stars</option>    
                </select><br/><br/>
                
                <label>Servings: </label>
                <select type="number" value={this.state.serving_size} name="serving_size" min="0" max="2" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>    
                </select><br/><br/>
                
                <label>Skill Level: </label>
                <select  type="text" value={this.state.skill_level} name="skill_level" onChange={(event) => this.handleOnChange(event)}>
                    <option value="0">Easy</option>
                    <option value="1">Moderate</option>
                    <option value="2">Arduous</option>
                </select><br/><br/>
                
                <label>Starred Recipe (check to starred recipe) </label>
                    <input 
                        type="checkbox" 
                        id="starred" 
                        name="starred" 
                        checked={this.state.starred} 
                        onChange={this.handleOnChange}
                    /> 
                <br/><br/>

                <input type="submit" value="Submit Recipe"  
                 onClick={this.handleOnSubmit}  
                />
                {/* <button onClick={() => {this.handleOnSubmit}}>Submit New Recipe</button> */}
   
                </form>
                
            </div>
        )
    }
}


export default connect(null, {addRecipe})(RecipeForm);
