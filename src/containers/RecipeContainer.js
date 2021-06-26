import React, { Component } from 'react'
import {fetchRecipes} from '../actions/fetchRecipes'
import {connect} from 'react-redux' 
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';

class RecipeContainer extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
    
    render() {
        return (
            <div>
                <h2>Recipe Container</h2> 
                {this.props.fetchRecipes}
                <RecipeList recipes={this.props.recipes}/>
                <RecipeForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('index map', recipes)
    return{
        // recipes: recipes.all
        recipes: state.recipes
    };
};
export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);