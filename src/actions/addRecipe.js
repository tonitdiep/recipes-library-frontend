// export const fetchRecipes = () => {
//     console.log("inside getRecipes fetch" )
//     return (dispatch) => {
//         // dispatch({ type: "LOAD_RECIPES"})
//         fetch('http://localhost:3000/api/v1/recipes')
//             .then((res) => res.json())
//             .then((recipes) => 
//                 dispatch({type: "FETCH_RECIPES", payload: recipes })
//             );
//     }; 
// }

export const addRecipe = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ data }),
        })
            .then((res) => res.json())
            .then((recipe) => 
                dispatch({ type: "ADD_RECIPE", payload: recipe})
            );
    };
};