import React, { Component } from 'react'
import fetchRecipes from '../actions/fetchRecipes'
import {connect} from 'react-redux' 

class RecipeContainer extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
    
    render() {
        return (
            <div>
                {this.props.fetchRecipes}
            </div>
        )
    }
}

const mapStateToProps = (recipes) => {
    // console.log('index map', recipes)
    return{
        recipes: recipes.all
    };
};
export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);