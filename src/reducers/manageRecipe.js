const manageRecipe = (state = {recipes: []}, action) => {
        switch(action.type){
            
            case 'FETCH_RECIPES':
                // debugger
                console.log("reducer loading recipe", state)
            return {
                    
                    ...state, 
                        // recipes: [...state.recipes]
                        recipes: action.payload
                        // recipes: [...state.recipes, action.payload]
                        // loading: true
                }


            case 'ADD_RECIPE':
                // debugger
                return {...state, recipes: [...state.recipes, action.payload]}


                        // case 'DELETE_RECIPE': 
            //     console.log("delete recipe", action)
                // const recipes = state.recipes.filter(recipe=> recipe.id !== action.id)
            //     return {
            //         ...state, 
            //         // recipes: [...state.recipes],
            //         recipes: [...state.recipes, action.payload],
            //         loading: false
            //     }    
        default:
            return state
        }
}
export default manageRecipe;