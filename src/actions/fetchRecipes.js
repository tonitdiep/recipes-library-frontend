export const fetchRecipes = () => {
    debugger
    return (dispatch) => {
debugger
        fetch(`http://localhost:3000/api/v1/recipes`)
            .then((res) => res.json())
            .then((recipes) => 
            
            {
                debugger
                dispatch ({
                type: "FETCH_RECIPES", 
                payload: recipes })}
            );
    }; 
}
