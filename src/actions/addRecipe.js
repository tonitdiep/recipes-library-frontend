
export const addRecipe = (data) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes`,{
            method: 'POST',    
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((recipe) => {
            debugger
                dispatch({ type: "ADD_RECIPE", payload: recipe})
            }
            );
    };
};