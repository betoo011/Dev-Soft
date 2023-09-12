import { createContext, useContext, useState } from "react";

//Crear contexto
export const CartContext = createContext();

//Crear provider 
export function CartProvider({ children }) {

    const userCartData = localStorage.getItem("userCart");
    let initialCart = [];
    let initialTotal = 0; // Agrega una variable para el precio total inicial.

    if (userCartData) {
        try {
            const parsedData = JSON.parse(userCartData);
            initialCart = parsedData.cart || [];
            initialTotal = parsedData.total || 0;
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    const [cart, setCart] = useState(initialCart);
    const [total, setTotal] = useState(initialTotal); // Estado para el precio total.

    const saveData = (cartData, total) => {
        const dataToStore = {
            cart: cartData,
            total: total
        };
        localStorage.setItem("userCart", JSON.stringify(dataToStore));
    }


    const addToCart = product => {
        setCart(prevState => {
            const updatedCart = [...prevState];
            const productIndex = updatedCart.findIndex(item => item.id === product.id);

            if (productIndex !== -1) {
                // El producto ya está en el carrito, aumentar la cantidad
                updatedCart[productIndex].quantity += 1;
                updatedCart[productIndex].totalPrice = updatedCart[productIndex].quantity * updatedCart[productIndex].price;

            } else {
                // El producto no está en el carrito, agregarlo
                updatedCart.push({
                    ...product,
                    quantity: 1,
                    totalPrice: product.price  // Inicializar el precio total
                });
            }
            const cartTotalPrice = updatedCart.reduce((total, item) => total + item.totalPrice, 0);

            // Guardar en localStorage
            saveData(updatedCart, cartTotalPrice);

            return updatedCart;
        });
    }

    const addQuantity = product => {
        setCart(prevState => {
            const updatedCart = [...prevState];
            const productIndex = updatedCart.findIndex(item => item.id === product.id);

            if (productIndex !== -1) {
                // El producto ya está en el carrito, aumentar la cantidad
                updatedCart[productIndex].quantity += 1;
                updatedCart[productIndex].totalPrice = updatedCart[productIndex].quantity * updatedCart[productIndex].price;

            }
            // Guardar en localStorage
            saveData(updatedCart);

            return updatedCart;
        });
    }

    const removeFromCart = product => {
        setCart(prevState => {

            const updatedCart = [...prevState];
            const productIndex = updatedCart.findIndex(item => item.id === product.id)
            updatedCart.splice(productIndex, 1);
            const cartTotalPrice = updatedCart.reduce((total, item) => total + item.totalPrice, 0);

            // Guardar el carrito y el precio total en localStorage
            saveData(updatedCart, cartTotalPrice);

            return updatedCart;
        })

    }

    const restQuantity = product => {
        setCart(prevState => {
            const updatedCart = [...prevState];
            const productIndex = updatedCart.findIndex(item => item.id === product.id);

            if (productIndex !== -1 && updatedCart[productIndex].quantity >= 1) {
                // Reducir la cantidad del producto
                updatedCart[productIndex].quantity -= 1;

                // Actualizar el precio total del producto
                updatedCart[productIndex].totalPrice = updatedCart[productIndex].quantity * updatedCart[productIndex].price;

                if (updatedCart[productIndex].quantity === 0) {
                    // Si la cantidad llega a 0, eliminar el producto del carrito
                    updatedCart.splice(productIndex, 1);
                }

                // Calcular el precio total del carrito
                const cartTotalPrice = updatedCart.reduce((total, item) => total + item.totalPrice, 0);

                // Guardar el carrito y el precio total en localStorage
                saveData(updatedCart, cartTotalPrice);

                return updatedCart;
            } else {
                return prevState; // Devolver el estado actual sin cambios
            }
        });
    }

    const clearCart = () => {
        setCart([]); // Borra todo el contenido del carrito
    
        // También borra el carrito de localStorage
        saveData([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            addQuantity,
            removeFromCart,
            restQuantity,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )

}