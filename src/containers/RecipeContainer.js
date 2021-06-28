import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Route} from 'react-router-dom'
import {fetchRecipes} from '../actions/fetchRecipes'
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import RecipeShow from '../components/RecipeShow'

class RecipeContainer extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
     
    render() {
        return (
            <div>

                <h2>Recipe Container</h2>
            {/* <Switch>     */}
                <Route path='/recipes/new' component={RecipeForm}/>
                
                {/* Show A Recipe ID: <Route exact path='recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/><br/> */}
                
                All Recipes: <Route exact path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes}/>}/>
                Show A Recipe ID: <Route path='recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipe}/>}/><br/>

               
            {/* </Switch> */}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('index map', recipes)
    return{
        // recipes: recipes.all
        recipes: state.recipes
        // recipes: state.recipes.recipes
    };
};
export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);