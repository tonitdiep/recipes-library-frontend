import React, { Component } from 'react'
import {fetchRecipes} from '../actions/fetchRecipes'
import {connect} from 'react-redux' 
import RecipleList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';

class RecipeContainer extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
    
    render() {
        return (
            <div>
                {this.props.fetchRecipes}
                <RecipleList/>
                <RecipeForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('index map', recipes)
    return{
        // recipes: recipes.all
        recipes:state.recipes
    };
};
export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);