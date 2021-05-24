import { useEffect } from "react";
import { fetchSuggestions } from "../utils/api";

const useFetchSuggestion = (searchTerm, dispatch) => {
  useEffect(() => {

    if (!searchTerm) return;

    fetchSuggestions(searchTerm).then((_suggestions) => {
      dispatch({ type: "SET_SUGGESTIONS", payload: _suggestions });
    });

  }, [searchTerm]);
  
};
export default useFetchSuggestion;
