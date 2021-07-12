
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

class Home extends Component {

    
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

                

            <Link to={`/recipes/new`}><i>Add</i> New Recipe</Link><br/><br/>
            <Link to={`/recipes`}><em>View</em> Recipes</Link><br/><br/>
            <Link to={`/recipes/FavRecipes`}><em>Favorite</em> Recipes</Link>

        </div>
        )
    }
}


export default (Home)