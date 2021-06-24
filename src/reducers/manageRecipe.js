const manageRecipe = (state = {recipes: [], loading: false}, action) => {
        switch(action.type){
            
            case 'LOAD_RECIPES':
                console.log("loading recipe", state)
            return {
                    
                    ...state, 
                        // recipes: [...state.recipes],
                        // recipes: [...state.recipes, action.payload],
                        loading: true
                }

            case 'RECIPES_LOADED': 
                console.log("recipes all loaded", action)
                return {
                    ...state, 
                    // recipes: [...state.recipes],
                    recipes: [...state.recipes, action.payload], 
                    loading: false
                }
            case 'ADD_RECIPE':
                return {
                    ...state,
                    loading: true
                }
        default:
            return state
        }
}
export default manageRecipe;