import { useEffect } from "react";
import { fetchProductDetail } from "../utils/api";

const useFetchProductDetail = (productId, dispatch) => {
  
  useEffect(() => {
    if (!productId) return;
  
    fetchProductDetail(productId).then((productInfo) =>
      dispatch({ type: "SET_PRODUCTINFO", payload: productInfo })
    );
  }, [productId]);
  
};

export default useFetchProductDetail;
