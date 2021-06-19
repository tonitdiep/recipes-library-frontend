export default function manageReipes(state = {
    recipes: [],
}, action) {
        switch(action.type){
            case 'LOAD_RECIPE':
                return {
                    ...state, 
                        recipes: [...state.recipes, action.recipe]
                }
        default:
            return state
        }
}