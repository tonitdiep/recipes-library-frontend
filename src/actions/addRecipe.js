
export const addRecipe = (data) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes`, {  
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',  
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((recipe) => dispatch({ type: "ADD_RECIPE", payload: recipe.data}));
    };
};