import { useContext } from "react";
import { ProductPreviewContext } from "../context/ProductPreviewContext";

export const usePreview = () =>{
    const context = useContext(ProductPreviewContext);

    if(context === undefined){
        throw new Error('useCart must be use whithin a CartProvider')
    }

    return context
}