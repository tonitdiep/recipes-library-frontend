function manageRecipe(state = {
    recipes: [], loading: false
}, action) {
        switch(action.type){
            
            case 'LOAD_RECIPE':
 
            return {
                    
                    ...state, 
                        recipes: [...state.recipes, action.payload],
                        loading: true
                }
        default:
            return state
        }
}
export default manageRecipe;