const manageRecipe = (state = {recipes: []}, action) => {
        switch(action.type){
            
            case 'FETCH_RECIPES':
                // debugger
                console.log("reducer loading recipe", action)
                return {
                        
                        ...state, 
                            // recipes: [...state.recipes]
                            recipes: action.payload    
                            // recipes: [...state.recipes, action.payload] 
                            // loading: true
                    }


            case 'ADD_RECIPE':
    
 
                return {recipes: [...state.recipes, action.payload]}
       
             
                case 'DELETE_RECIPE': 

                return {
               
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    

            case 'EDIT_RECIPE': 
                console.log("inside edit recipe", state)
                return {
 
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    
        default:
            return state
        }
}
export default manageRecipe;