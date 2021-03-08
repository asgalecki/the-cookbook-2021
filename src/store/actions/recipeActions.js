export const createRecipe = (recipe) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('recipes').add({
      ...recipe,
      authorNickName: profile.nickName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_RECIPE', recipe });
    }).catch((err) => {
      dispatch({ type: 'CREATE_RECIPE_ERROR', err })
    })
  }
};

export const deleteRecipe = (choosenRecipe) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    const firestoreRecipe = firestore.collection('recipes').doc(choosenRecipe);

    firestoreRecipe.delete({
    }).then(() => {
      dispatch({ type: 'DELETE_RECIPE_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'DELETE_RECIPE_ERROR', err})
    })
  }
}

export const getRecipeThumbnail = (categoryName) => {
  return (dispatch, getState) => {
    const getDataFromAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + String(categoryName);

    fetch(getDataFromAPI)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'GET_RECIPE_THUMBNAIL_SUCCESS', meals: res.meals })
    }).catch(err => {
      dispatch({ type: 'GET_RECIPE_THUMBNAIL_ERROR', err})
    })
  }
}

export const getRecipe = (recipeId) => {
  return (dispatch, getState) => {
    const getDataFromAPI = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + String(recipeId);

    fetch(getDataFromAPI)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'GET_RECIPE_SUCCESS', meals: res.meals })
    }).catch(err => {
      dispatch({ type: 'GET_RECIPE_ERROR', err})
    })
  }
}

export const getRecipeCategories = () => {
  return (dispatch, getState) => {
    const getDataFromAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    fetch(getDataFromAPI)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'GET_RECIPE_CATEGORIES_SUCCESS', categories: res.categories })
    }).catch(err => {
      dispatch({ type: 'GET_RECIPE_CATEGORIES_ERROR', err})
    })
  }
}

export const getRecipeByName = (recipeName) => {
  return (dispatch, getState) => {
    const getDataFromAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + String(recipeName);

    fetch(getDataFromAPI)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'GET_RECIPE_BY_NAME_SUCCESS', meals: res.meals, recipeName })
    }).catch(err => {
      dispatch({ type: 'GET_RECIPE_BY_NAME_ERROR', err})
    })
  }
}