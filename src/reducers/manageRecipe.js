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

                // action.action.payload
            case 'ADD_RECIPE':
    
                // let recipes = state.recipes.map(recipe =>{

                    // if (recipe.id === action.payload.id) {
                        // return action.action.payload
                        // action.payload
                    // } else {
                        // return recipe
                    // }
                // })
                return {recipes: [...state.recipes, action.payload]}
                // return {...state, recipes: recipes}
             
                case 'DELETE_RECIPE': 
                // console.log("delete recipe", action)
                // const recipeDeleting = state.recipes.filter(recipe => 
                //     {
                //         if (recipe.id === action.payload.id) {
                //             return action.payload
                //         } else {
                //             return recipe
                //         }
                //     })

                return {
                    // ...state, recipes: [...state.recipes, action.payload]
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    

                case 'EDIT_RECIPE': 
                console.log("inside edit recipe", state)
                return {
                    // ...state, recipes: [...state.recipes, action.payload]
                     recipes: state.recipes.filter( recipe =>  recipe.id !== action.payload) 
                }    
        default:
            return state
        }
}
export default manageRecipe;