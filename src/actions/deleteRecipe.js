export const deleteRecipe = (recipeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            // body: JSON.stringify(),
        })
            .then(res => res.json())
            .then(deleted_recipe => dispatch({
                type: 'DELETE_RECIPE',
                // recipeId: recipeId
                payload: deleted_recipe
            }))
    }
}
