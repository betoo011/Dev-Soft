import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../hooks/useCart'
import { ProductPreviewContext } from "../context/ProductPreviewContext";
import { useContext, useState } from "react";

export function AddCartProductView({ selectedSize }) {
    const { addToCart, cart } = useCart();

    const { productPreview } = useContext(ProductPreviewContext);

    // Define un estado local para controlar el mensaje de error
    const [showError, setShowError] = useState(false);

    // Aquí puedes usar el ID de la URL para obtener el producto correspondiente desde el contexto
    const product = productPreview; // Aquí debes obtener el producto según su ID

    const handleAddToCart = () => {
        if (selectedSize !== "") {
            addToCart(product);
            console.log("Agregado al carrito:", selectedSize);
            // Si se agrega correctamente, oculta el mensaje de error
            setShowError(false);
        } else {
            // Si no se selecciona una talla, muestra el mensaje de error
            setShowError(true);
        }
    };



    return (
        <div className="flex flex-col justify-center w-full sm:items-center gap-4  my-[80px]">
            <button
                className="hover:bg-black/20 bg-transparent w-[80%] py-[1px] border border-stone-700 text-stone-700 font-semibold text-center"
                type="button"
                onClick={handleAddToCart}
            >
                Agregar al carrito
                <FontAwesomeIcon className="ml-3" icon={faCartPlus} />
            </button>


            <div className="flex justify-start w-[78%] text-center sm:text-justify sm:w-full">

                {showError && (
                    <p className="text-red-500 mt-1 font-semibold text-[21px]">
                        Debes seleccionar una talla antes de agregar al carrito.
                    </p>
                )}
            </div>
        </div>
    );
}