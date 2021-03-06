export const deleteRecipe = (recipeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(deletedRecipeId => {
                
                
                dispatch({
                
                type: 'DELETE_RECIPE',
                // recipeId: recipeId
                payload: deletedRecipeId
            })})}
    }

