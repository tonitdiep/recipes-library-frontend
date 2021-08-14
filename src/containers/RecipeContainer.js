import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Route, Switch, Redirect} from 'react-router-dom'
import {fetchRecipes} from '../actions/fetchRecipes'
import {addRecipe} from '../actions/addRecipe'
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import RecipeShow from '../components/RecipeShow';

import StarredContainer from './StarredContainer';

class RecipeContainer extends Component {
    
    componentDidMount = () =>{
      debugger
        this.props.fetchRecipes();


    }

    renderComponent = (Component, props) => (
       
        <Component {...props} recipes={this.props.recipes}/>
    )

    render() {
  

        console.log("form redirect = " , this.props.redirect)
        console.log("form redirect to = " , this.props.redirectTo)
     
        if (this.props.redirect && this.props.location.pathname !== this.props.redirectTo) {

            console.log("aaaa")
        
            
            return <Redirect to={this.props.redirectTo} />;             
        }
debugger
        return (
            <div>

            <Switch>   
                <Route exact path='/recipes/new' component={(routerProps) => this.renderComponent(RecipeForm, routerProps)}/> 
        
                <Route exact path='/recipes/FavRecipes' render={(routerProps) => <StarredContainer {...routerProps} recipes={this.props.recipes}/>}/>

                <Route exact path='/recipes/:id' component={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/>
          
                <Route exact path='/recipes' render={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>

            </Switch>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
debugger
    return {
        recipes: state.recipes, 
        redirect: state.redirect,
        redirectTo: state.redirectTo
        
    };
};

export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);