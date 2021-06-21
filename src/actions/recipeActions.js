export const getRecipes = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes`)
            .then((res) => res.json())
            .then((recipes) => 
                dispatch({type: "FETCH_RECIPES_SUCCESS", payload: recipes })
            );
    };
}

export const createRecipe = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/recipes`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipe: data }),
        })
            .then((res) => res.json())
            .then((recipe) => 
                dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe})
            );
    };
};