import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {Route, Switch, Redirect} from 'react-router-dom'
import {fetchRecipes} from '../actions/fetchRecipes'
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import RecipeShow from '../components/RecipeShow'

import StarredContainer from './StarredContainer';

class RecipeContainer extends Component {
    
  componentDidMount = () =>{
    this.props.fetchRecipes();
    }

    render() {

        return (
            <div>

            <Switch>   

                <Route exact path='/recipes/new'        

                    component={(routerProps) =>  <RecipeForm {...routerProps} recipes={this.props.recipes}  />   
                }
                
                />
                    
                <Route exact path='/recipes/FavRecipes' component={(routerProps) => <StarredContainer {...routerProps} recipes={this.props.recipes}/>}/>

                <Route exact path='/recipes/:id' component={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes}/>}/>
     
                <Route exact path='/recipes' component={(routerProps) => <RecipeList {...routerProps} recipes={this.props.recipes}/>}/>
                <br/><br/>
                <Redirect from="/recipes/new" push to="/recipes/:id"/>

            </Switch>

            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return{
        recipes: state.recipes
    };
};

export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);