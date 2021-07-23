export const fetchRecipes = () => {

    return (dispatch) => {

        fetch(`http://localhost:3000/api/v1/recipes`)
            .then((res) => res.json())
            .then((recipes) => 
            
            {

                dispatch ({
                type: "FETCH_RECIPES", 
                payload: recipes })}
            );
    }; 
}
