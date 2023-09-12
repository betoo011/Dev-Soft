import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductPreviewContext = createContext();

export function ProductPreviewProvider({ children }) {
  const [productPreview, setProductPreview] = useState(null);
  
  const openProductPreview = (product) => {
    setProductPreview(product);
  };

  const closeProductPreview = () => {
    setProductPreview(null);
  };

  return (
    <ProductPreviewContext.Provider
      value={{
        productPreview,
        openProductPreview,
        closeProductPreview,
      }}
    >
      {children}
    </ProductPreviewContext.Provider>
  );
}
