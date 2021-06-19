export const getRecipes = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/recipes`)
            .then((res) => res.json())
            .then((players) => 
                dispatch({type: "FETCH_RECIPES_SUCCESS", payload: recipes })
            );
    };
}

export const createRecipe = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ player: data }),
        })
            .then((res) => res.json())
            .then((player) => 
                dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe})
            );
    };
};