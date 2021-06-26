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

            // case 'DELETE_RECIPES': 
            //     console.log("recipes all loaded", action)
            //     return {
            //         ...state, 
            //         // recipes: [...state.recipes],
            //         recipes: [...state.recipes, action.payload],
            //         loading: false
            //     }
            case 'ADD_RECIPE':
                // debugger
                return {...state, recipes: [...state.recipes, action.payload]}

        default:
            return state
        }
}
export default manageRecipe;