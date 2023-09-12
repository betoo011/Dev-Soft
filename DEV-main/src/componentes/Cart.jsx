import React, { useState } from 'react'
import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../hooks/useCart'
import './cart.css'

function CartItem({ img, price, name, quantity, addQuantity, restQuantity, removeFromCart }) {

    return (
        <li className='border-b-[#444] mb-8 grid grid-flow-col-dense'>
            <div className='relative'>
                <img
                    className='aspect-square w-full border rounded-md  pr-1 '
                    src={img}
                    alt={name}
                />
                <button onClick={removeFromCart} className='absolute -top-1  text-[25px] rounded-sm group'>
                    <FontAwesomeIcon className='bg-white/50 top-0 group-hover:text-red-700 group-hover:scale-110 ' icon={faXmark}></FontAwesomeIcon>
                </button>
            </div>

            <div className='grid grid-cols-1 -space-y-10 ml-1'>
                <strong className='text-[19px] font-extrabold font-darker-grotesque'>{name}</strong>
                <strong className='text-[16px] font-extrabold font-darker-grotesque'>${price * quantity}</strong>

                <footer className='flex gap-2 justify-center items-center'>
                    <small>
                        Cantidad: {quantity}
                    </small>
                    <button onClick={addQuantity} className='p-2'>+</button>
                    <button onClick={restQuantity} className='p-2'>-</button>
                </footer>
            </div>
        </li>
    )
}


export function Cart() {

    const cartCheckBoxId = useId();

    const { cart, clearCart, addQuantity, restQuantity, removeFromCart } = useCart();

    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisible = () => {
        setCartVisible(!cartVisible);
    };



    return (
        <>
            <label className='cart-button cursor-pointer' htmlFor={cartCheckBoxId}>
                <li>
                    Carrito <FontAwesomeIcon className='' icon={faCartShopping}></FontAwesomeIcon>
                </li>
            </label>

            <button className='' id={cartCheckBoxId} type="button" onClick={toggleCartVisible} />

            <aside className={`cart overflow-y-auto border border-black bg-[#F1F6F9] px-2 py-4 fixed right-0 top-0 w-[300px] rounded-lg 
            ${cartVisible ? 'cart-visible' : 'cart-hidden'} z-[100]`}>

                <div className='w-full justify-end h-8 flex items-center mb-5'>
                    <button className='exit bg-black/5 h-8 w-20 rounded-full' onClick={toggleCartVisible}>
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                </div>

                <ul>
                    {cart.length === 0 ? (
                        <div className=' h-[500px] items-center flex justify-center'>
                            <h1 className='text-[23px]'>El carrito está vacío</h1>
                        </div>
                    ) :

                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                addQuantity={() => addQuantity(product)}
                                restQuantity={() => restQuantity(product)} // Agregado
                                removeFromCart={() => removeFromCart(product)}
                                {...product}
                            />

                        ))


                    }



                </ul>

                {cart.length === 0 ? (
                    ''
                ) :
                    <>
                        <div className='bg-black/30 h-[1px] w-full'></div>

                        <div className=' flex-col'>
                            <div className='flex justify-between'>
                                <strong className='text-[20px] font-extrabold font-darker-grotesque'>Subtotal</strong>
                                <strong className='text-[18px] font-medium font-darker-grotesque'>{ }</strong>
                            </div>

                            <div>
                                <strong>Envio</strong>
                            </div>

                            <div>
                                <button className='bg-[#F1F6F9] text-black font-darker-grotesque font-extrabold rounded-full w-full h-[3rem] my-2 border-[1px] border-black hover:bg-blue-800/5 hover:text-[20px] text-[18px]'>Tramitar pedido</button>
                            </div>
                        </div>

                        <button className=' bg-[#F1F6F9] text-black font-darker-grotesque font-extrabold rounded-full w-full h-[5%] my-2 border-[1px] border-black hover:bg-blue-800/5 hover:text-[20px] text-[18px]' onClick={clearCart}>Clear
                        </button>
                    </>

                }


            </aside>


        </>
    )
}
