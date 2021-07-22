const manageRecipe = (state = {recipes: []}, action) => {

        switch(action.type){
            
            case 'FETCH_RECIPES':
                return {
                        ...state, 
                            recipes: action.payload    
        
                    }


            case 'ADD_RECIPE':
                return {recipes: [...state.recipes, action.payload]}
   
             
            case 'DELETE_RECIPE': 
                return {
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    

            case 'LIKE_RECIPE': 
                console.log('like recipe reducer', action)
                return {
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }; 
            
            case "UPVOTE_RECIPE":
                debugger
                // let index = state.findIndex(recipe => recipe.id == action.recipeId);
                // let recipe = state[index];
        
                // return [
                //     ...state.slice(0, index),
                //     // Object.assign({}, recipe, { votes: recipe.votes += 1 }),
                //     (state.recipe, { votes: recipe.votes += 1 }),
                //     ...state.slice(index + 1)
                // ];


                return state.map((recipe) => recipe.id === action.recipeId ? {
                    ...recipe, votes: recipe.votes + 1} : recipe
                )

        default:
            return state
        }
}
export default manageRecipe;