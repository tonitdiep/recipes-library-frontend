const manageRecipe = (state = {recipes: []}, action) => {
        switch(action.type){
            
            case 'FETCH_RECIPES':
                console.log("reducer loading recipe", state)
            return {
                    
                    ...state, 
                        // recipes: [...state.recipes]
                        // recipes: action.payload
                        recipes: [...state.recipes, action.payload]
                        // loading: true
                }

            // case 'RECIPES_LOADED': 
            //     console.log("recipes all loaded", action)
            //     return {
            //         ...state, 
            //         // recipes: [...state.recipes],
            //         recipes: [...state.recipes, action.payload],
            //         loading: false
            //     }
            case 'ADD_RECIPE':
                return {...state, recipes: [...state.recipes, action.payload]}
                
        default:
            return state
        }
}
export default manageRecipe;