const manageRecipe = (state = {recipes: [], redirect: false, redirectTo: ''}, action) => {

        switch(action.type){
            
            case 'FETCH_RECIPES':
                return {
                        ...state, 
                            recipes: action.payload           
                    }

            case 'ADD_RECIPE':
                console.log("reducer location", action.payload)
                debugger
                return {recipes: [...state.recipes, action.payload], 
                    redirect: true, redirectTo: "/recipes/" + action.payload.id}
             
            case 'DELETE_RECIPE': 
                return {
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    



        default:
            return state
        }
}
export default manageRecipe;