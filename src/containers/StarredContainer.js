import React from 'react'
import RecipeForm from '../components/RecipeForm'
import RecipeList from '../components/RecipeList'
import RecipeShow from '../components/RecipeShow'
const StarredContainer = (props) => {
    // let recipe = props.recipes.filter(recipe => recipe.id)
    // let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

    return (
        <div>
            <h2>StarredContainer</h2>
                {/* <RecipeList RecipeList={this.props.recipe && this.props.recipe.recipes} />
                <RecipeForm RecipeForm={this.props.recipe} /> */}
        </div>
    )
}

export default StarredContainer
