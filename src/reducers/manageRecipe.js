const manageRecipe = (state = {recipes: []}, action) => {
        switch(action.type){
            
            case 'FETCH_RECIPES':
                // debugger
                console.log("reducer loading recipe", action)
            return {
                    
                    ...state, 
                        // recipes: [...state.recipes]
                        recipes: action.payload
                        // recipes: [...state.recipes, action.payload] X noo
                        // loading: true
                }


            case 'ADD_RECIPE':
                debugger
                return {...state, recipes: [...state.recipes, action.payload]}


                case 'DELETE_RECIPE': 
                console.log("delete recipe", action)
                const recipeDeleting = state.recipes.filter(recipe => 
                    {
                        if (recipe.id === action.payload.id) {
                            return action.payload
                        } else {
                            return recipe
                        }
                    })

                return {
                    // ...state, recipes: [...state.recipes, action.payload]
                    ...state, recipes: recipeDeleting
               
                }    
        default:
            return state
        }
}
export default manageRecipe;