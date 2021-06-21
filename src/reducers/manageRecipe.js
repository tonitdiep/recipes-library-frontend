function manageRecipe(state = {
    recipes: [],
}, action) {
        switch(action.type){
            
            case 'LOAD_RECIPE':
            console.log("inside manageRecipe")    
            return {
                    
                    ...state, 
                        recipes: [...state.recipes, action.payload]
                }
        default:
            return state
        }
}
export default manageRecipe;