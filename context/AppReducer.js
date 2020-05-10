export default (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: [],
        error: 'Something went wrong!',
      };
    case 'DATA_FILTER':
      return {
        searchHolder: action.payload,
      };
    default:
      return state;
  }
};
