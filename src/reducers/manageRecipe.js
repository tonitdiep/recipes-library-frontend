const manageRecipe = (state = {recipes: [], loading: false}, action) => {
        switch(action.type){
            
            case 'LOAD_RECIPE':
console.log("inside load recipe", action)
            return {
                    
                    ...state, 
                        recipes: [...state.recipes],
                        // recipes: [...state.recipes, action.payload],
                        loading: true
                }

            case 'RECIPE_LOADED': 
            console.log("in recipe loaded")
            // case 'ADD_RECIPE': 
                return {
                    ...state, 
                    recipes: [...state.recipes, action.payload],
                    // recipes: action.recipes, 
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