import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Link, Route, Switch} from 'react-router-dom'
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

                {/* <Route path='/recipes/' render={RecipeList}/> */}
                {/* <Route path='/recipes/:id' render={RecipeShow}/> */}
                {/* <Route path='/recipes/new' component={RecipeForm}/> */}

            <Switch>   
                {/* <Route path='/recipes/new' component={RecipeForm}/> */}
                <Route exact path='/recipes/new' component={(routerProps) => <RecipeForm {...routerProps} recipes={this.props.recipes}/>}/>
       
                <Route exact path='/recipes/:id' component={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>

       
            </Switch>
            <Route exact path='/recipes' component={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>
            {/* show------------------------- */}
                {/* <Route exact path='/recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/> */}
                

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
