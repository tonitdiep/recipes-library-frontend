import React from 'react'
import {Link} from 'react-router-dom'
const Home = (props) => {
    return (
        <div>
            <h1>
                Greetings!
            </h1>
                <p>
                    Here at Recipes Library, we have recipes ideas to low-carb and keto lifestyle.<br/><br/>
                    Find a recipe that suits your needs and interest. <br/><sbr/>
                </p>

                
{/* 
                <ul>
        {
        //   props.recipes && props.recipes.map( recipe =>
          props.recipes.map( recipe =>
            // <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}> {recipe.name} </Link>
            // </li>
          )
        }
      </ul> */}
            <Link to={`/recipes/new`}>Add New Recipe</Link><br/><br/>
            <Link to={`/recipes`}>View Recipes</Link>


        </div>
    )
}
export default Home