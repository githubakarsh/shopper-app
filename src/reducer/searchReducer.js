
export const initialSearchState = {
  suggestions: [],
  productInfo: {},
  shouldDisplayList: false,
  productId: "",
  searchTerm: "",
  loader : false,
  error : false,
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUGGESTIONS":
      return {...state, suggestions: action.payload, shouldDisplayList: true };
    case "SET_PRODUCTINFO":
        return {...state, productInfo: action.payload };
    case "SET_PRODUCT_ID":
        return {...state, productId : action.payload, shouldDisplayList: false, searchTerm: '' };
    case "SET_SEARCH_ITEM":
        return {...state, searchTerm: action.payload, productInfo: {}, suggestions: [] };
    case "SET_LOADER" :
        return {...state, loader : action.payload }
    case "SET_ERROR" :
        return {...state, error : action.error}
    default:
      return state;
  }
};
