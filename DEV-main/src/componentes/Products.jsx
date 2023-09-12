import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { ProductPreviewContext } from "../context/ProductPreviewContext";

export const Products = ({ products }) => {

  const { openProductPreview } = useContext(ProductPreviewContext);
  const history = useNavigate();

  const handleClick = (product) => {
    openProductPreview(product);
    history(`${product.id}`); // Navegar a la vista previa del producto con el ID en la URL
  };

  return (
    <>

      <div className='sm:grid flex flex-wrap  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5'>

        {products.slice(0, 12).map(product => {

          return (

            <div key={product.id} className='group max-w-[370px] mx-auto'>
              <div className=" bg-white  shadow-sm shadow-slate-950 relative overflow-hidden rounded-[20px] cursor-pointer font-darker-grotesque font-medium py-[1px] mx-2 my-5 grid justify-center gap-y-1">


                <button onClick={() => handleClick(product)}>
                  <div className="flex justify-center overflow-hidden bg-white">
                    <img className='w-[370px] h-[370px]   hover:scale-125 transition-all duration-300 ' src={product.img} alt="" />
                  </div>


                  <div className={` items-center text-white flex justify-between absolute inset-0 top-[325px] h-[3rem] bg-black/80  px-[2px] `}>
                    <strong>{product.name}</strong>

                    <h3>{`$${product.price}`}</h3>
                  </div>

                </button>

              </div>


            </div>

          )
        })}


      </div>
      <hr className='h-[2px] bg-black mt-10' />
      <Footer />

    </>
  )
}

export default Products