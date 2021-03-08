const initState = {};

const recipeReducer = ( state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      // console.log('recipe added');
      return state;
    case 'CREATE_RECIPE_ERROR':
      // console.log('add recipe error', action.error);
      return state;
    case 'DELETE_RECIPE_SUCCESS':
      // console.log('recipe deleted successfully');
      return state;
    case 'DELETE_RECIPE_ERROR':
      // console.log('recipe delete error', action.error);
      return state;
    case 'GET_RECIPE_THUMBNAIL_SUCCESS':
      // console.log('get recipe thumbnail success');
      return {
        ...state,
        meals: action.meals
      }
    case 'GET_RECIPE_THUMBNAIL_ERROR':
      // console.log('get recipe thumbnail error', action.error);
      return state;
    case 'GET_RECIPE_SUCCESS':
      // console.log('get recipe success');
      return {
        ...state,
        meal: action.meals
      }
    case 'GET_RECIPE_ERROR':
      // console.log('get recipe error', action.error);
      return state;
    case 'GET_RECIPE_CATEGORIES_SUCCESS':
      // console.log('get recipe categories success');
      return {
        ...state,
        categories: action.categories
      }
    case 'GET_RECIPE_CATEGORIES_ERROR':
      // console.log('get recipe categories error', action.error);
      return state;
    case 'GET_RECIPE_BY_NAME_SUCCESS':
      // console.log('get recipe by name success');
      return {
        ...state,
        meals: action.meals,
        recipeName: action.recipeName
      }
    case 'GET_RECIPE_BY_NAME_ERROR':
      // console.log('get recipe by name error', action.error);
      return state;
    default:
      return state;
  }
};

export default recipeReducer;