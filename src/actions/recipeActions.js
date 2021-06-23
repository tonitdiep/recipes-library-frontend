export const getRecipes = () => {
    console.log("inside fetch" )
    return (dispatch) => {
        debugger
        dispatch({ type: "LOAD_RECIPE"})
        fetch('http://localhost:3000/api/v1/recipes')
            .then((res) => res.json())
            .then((recipes) => 
                dispatch({type: "RECIPE_LOADED", payload: recipes })
            );
    }; 
}

export const createRecipe = (recipe) => {
    debugger
    return (dispatch) => {
        fetch('http://localhost:3000/recipes',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipe: recipe }),
        })
            .then((res) => res.json())
            .then((recipe) => 
                dispatch({ type: "ADD_RECIPE", payload: recipe})
            );
    };
};