
import {Link} from 'react-router-dom'
import { fetchRecipes } from '../actions/fetchRecipes'
import {connect} from 'react-redux'
import React, { Component } from 'react'

class Home extends Component {
    // componentDidMount = () =>{
    //     this.props.fetchRecipes();
    // }
    
    render() {
        return (
            <div>
            <h1>
                Greetings!
            </h1>
                <p>
                    Here at Recipes Library, we have recipes ideas to low-carb and keto lifestyle.<br/><br/>
                    Find a recipe that suits your needs and interest. <br/><sbr/>
                </p>

                

            <Link to={`/recipes/new`}>Add New Recipe</Link><br/><br/>
            <Link to={`/recipes`}>View Recipes</Link><br/><br/>
            <Link to={`/recipes/FavRecipes`}>Fav Recipes</Link>

        </div>
        )
    }
}

// export default connect(null, {fetchRecipes})(Home)

export default (Home)