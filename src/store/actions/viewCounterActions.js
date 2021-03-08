export const incrementViews = (recipe) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('counter').doc(recipe.id).set({
      ...recipe
    }).then(() => {
      dispatch({ type: 'INCREMENT_VIEW_SUCCESS', recipe });
    }).catch((err) => {
      dispatch({ type: 'INCREMENT_VIEW_ERROR', err })
    })
  }
};