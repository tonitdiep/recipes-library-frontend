export const likeRecipe = (likeRecipeId) => {
    console.log("like recipeId", likeRecipeId)
    return {
        type: 'LIKE_RECIPE',
        likeRecipeId
    }

};