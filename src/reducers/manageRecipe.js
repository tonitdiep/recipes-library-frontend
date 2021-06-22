function manageRecipe(state = {
    recipes: [], loading: false
}, action) {
        switch(action.type){
            
            case 'LOAD_RECIPE':
console.log("inside load recipe", action)
            return {
                    
                    ...state, 
                        recipes: [...state.recipes, action],
                        // recipes: [...state.recipes, action.payload],
                        loading: true
                }

            case 'ADD_RECIPE': 
                return {
                    ...state, recipes: [...state.recipes, action.payload]
                }
        default:
            return state
        }
}
export default manageRecipe;