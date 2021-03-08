const initState = {};

const viewCounterReducer = ( state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_VIEW_SUCCESS':
      // console.log('increment view success');
      return state;
    case 'INCREMENT_VIEW_ERROR':
      // console.log('increment view error', action.err.message);
      return state;
    default:
      return state;
  }
};

export default viewCounterReducer;