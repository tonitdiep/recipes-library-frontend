const recipesReducer = (state = {recipes: [], loading: false}, action) => {
    switch(action.type){
    case 'LOADING_RECIPES':
        return {
            ...state,
            recipes: [...state.recipes],
            // recipes: [...state.recipes, action.payload],
            loading: true
        }
    case 'ADD_RECIPES':
        return {
            ...state,
            recipes: action.recipes,
            loading: false
        }
    default:
        return state;
    }
}

export default recipesReducer;
