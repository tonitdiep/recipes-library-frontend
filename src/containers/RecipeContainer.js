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
                <p>Recipe Container</p>
            {/* <Switch>    */}
                <Route exact path='/recipes/new' component={RecipeForm}/>
                {/* </Switch>  */}
                {/* <Route exact path='/recipes/' component={RecipeList}/> */}
                
                {/* <Link to={'/recipes/:id'}>Recipe Show</Link> */}


                {/* Show A Recipe ID: <Route exact path='recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/><br/> */}
               
                <Switch>
                <Route  path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>
                </Switch>


                <Route exact path='/recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/>
                {/* <Switch>
                <Route exact path='/recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>
                </Switch>  */}
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
