export const editRecipe = (recipeId) => {
    console.log("inside editRecipes fetch" )
    
    return (dispatch) => {

        fetch(`http://localhost:3000/api/v1/recipes/${recipeId}`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',

        })
            .then((res) => res.json())
            .then((editRecipeId) => 
            
            {
                dispatch ({
                type: "EDIT_RECIPE", 
                payload: editRecipeId })}
            );
    }; 
}


