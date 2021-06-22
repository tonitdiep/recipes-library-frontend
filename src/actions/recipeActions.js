export const getRecipes = () => {
    console.log("inside fetch" )
    return (dispatch) => {
        // dispatch({ type: "LOAD_RECIPE"})
        fetch('http://localhost:3000/api/v1/recipes')
            .then((res) => res.json())
            .then((recipes) => 
                dispatch({type: "RECIPE_LOADED", payload: recipes })
            );
    }; 
}

export const createRecipe = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/recipes',{
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