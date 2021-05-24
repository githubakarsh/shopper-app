import React, { useReducer} from "react";
import "./App.css";
import Autocomplete from "./Autocomplete";
import useFetchProductDetail from "./hooks/useFetchProductDetail";
import useFetchSuggestion from "./hooks/useFetchSuggestion";
import GlobalManager from "./pages/GlobalManager";
import ProductDetail from "./ProductDetail";
import { searchReducer, initialSearchState } from "./reducer/searchReducer";


const App = () => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  
  useFetchSuggestion(state.searchTerm, dispatch);
  useFetchProductDetail(state.productId, dispatch);

  const onSearchTerm = (searchItem) => {
    dispatch({type: 'SET_SEARCH_ITEM', payload : searchItem})
  }

  const onSelectSearchItem = (e, itemId) => {
    e.preventDefault();
    dispatch({type: 'SET_PRODUCT_ID', payload : itemId});
  }

  return (
    <div className="App">
      <GlobalManager>
      <Autocomplete
        suggestions={state.suggestions}
        searchTerm={state.searchTerm}
        onSearchTerm={onSearchTerm}
        onSelectSearchItem={onSelectSearchItem}
        displayList={state.shouldDisplayList}
      />
      {Object.keys(state.productInfo).length > 0 &&  
        <ProductDetail 
        productInfo={state.productInfo}
      />}
      </GlobalManager>
    </div>
  );
}

export default App;
