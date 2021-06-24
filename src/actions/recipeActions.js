export const getRecipes = () => {
    console.log("inside fetch" )
    return (dispatch) => {
        debugger
        dispatch({ type: "LOAD_RECIPES"})
        fetch('http://localhost:3000/api/v1/recipes')
            .then((res) => res.json())
            .then((recipes) => 
                dispatch({type: "RECIPES_LOADED", payload: recipes })
            );
    }; 
}

export const addRecipe = (recipe) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipe }),
        })
            .then((res) => res.json())
            .then((recipe) => 
                dispatch({ type: "ADD_RECIPE", payload: recipe})
            );
    };
};