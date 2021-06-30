export const fetchRecipes = () => {
    console.log("inside fetchRecipes fetch" )
    debugger
    return (dispatch) => {
        // dispatch({ type: "LOAD_RECIPES"})
        fetch(`http://localhost:3000/api/v1/recipes`)
            .then((res) => res.json())
            .then((recipes) => 
            
            {debugger
                dispatch ({
                type: "FETCH_RECIPES", 
                payload: recipes.data })}
            );
    }; 
}
