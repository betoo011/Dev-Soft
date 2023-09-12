// import { Favorites } from "./Favorites";
import { SizeProductView } from "./SizeProductView";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ProductPreviewContext } from "../context/ProductPreviewContext";
import CategoriasNav from "./CategoriasNav";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { Recomendation } from "./Recomendation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";




export const ProductView = () => {

    const { productPreview, closeProductPreview } = useContext(ProductPreviewContext);

    // Aquí puedes usar el ID de la URL para obtener el producto correspondiente desde el contexto
    const product = productPreview; // Aquí debes obtener el producto según su ID

    const navigate = useNavigate();

    useEffect(() => {
        if (!productPreview) {
            closeProductPreview(); // Cierra la vista previa del producto
            navigate(-1); // Regresa a la página anterior
        }
    }, [productPreview, closeProductPreview, navigate]);

    const handleGoBackAndClose = () => {
        closeProductPreview(); // Cierra la vista previa del producto
        navigate(0); // Regresa a la página anterior
    };

    const imgSlide = [
        { id: 1, img: productPreview ? product.img : "" },
        { id: 2, img: productPreview ? product.img : "" },
        { id: 3, img: productPreview ? product.img : "" },
        { id: 4, img: productPreview ? product.img : "" },
    ];

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);


    return (
        <>
            <NavBar />
            <CategoriasNav />
            <button className="mt-[2rem] sm:my-[2rem] sm:ml-[5rem] ml-[1rem] px-2 gap-x-[5px] flex items-center text-white bg-black rounded-[5px]" onClick={handleGoBackAndClose}>
                <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
                <label>Regresar</label>
            </button>
            <div className="product-preview ">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-x-0 md:mx-20">
                    <div className="space-y-2 hidden overflow-hidden md:flex md:flex-col ">

                        <div className="grid grid-cols-2 gap-x-2 w-full">
                            <img className="object-cover ease-in-out duration-300  transform hover:scale-105 w-full h-full" src={productPreview ? product.img : ""} alt="Camiseta sunday" />
                            <img className="object-cover ease-in-out duration-300  transform hover:scale-105 h-full " src={productPreview ? product.img : ""} alt="Camiseta sunday" />
                        </div>

                        <div className="grid grid-cols-2 gap-x-2  w-full">
                            <img className="ease-in-out duration-300 h-full w-[100%] object-cover  transform hover:scale-105" src={productPreview ? product.img : ""} alt="Camiseta sunday" />
                            <img className="ease-in-out duration-300 h-full w-[100%] object-cover  transform hover:scale-105" src={productPreview ? product.img : ""} alt="Camiseta sunday" />
                        </div>

                    </div>

                    <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden mx-1 md:hidden">
                        <motion.div className="inner-carousel flex" whileTap={{ cursor: "grabbing" }}
                            drag='x'
                            dragConstraints={{ right: 0, left: -width }}>
                            {imgSlide.map(image => {
                                return (
                                    <motion.div key={image.id} className="item min-h-[40rem] min-w-[30rem] py-10 px-[2px] sm:px-5 ">
                                        <img className=" w-full h-full rounded-[20px] pointer-events-none" src={image.img} alt="" />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                    <div className="ml-10  sm:mx-2 font-darker-grotesque  text-2xl"  >
                        <div className="  sm:ml-20 min-w-full">
                            <h1 className="font-[1000] text-4xl  mt-[20px] mb-[10px] ">{productPreview ? product.name : ""}</h1>
                            <p className="mt-[15px] font-semibold text-black/70">${productPreview ? product.price : ""}</p>
                            <div className="bg-black/60 my-2 h-[1.2px] w-[70%] text-black/70"></div>
                            <p className="mt-[5px]  font-bold" >Color: hueso</p>
                        </div>

                        <div className="sm:ml-20 text-justify my-3 w-[90%] sm:w-[70%] text-black/80 font-semibold ">
                            <p className="text-[25px]">Camiseta estampada cuello redondo para hombre de ajuste holgado,jersey suave de algodón 100 % </p>
                        </div>

                        <div className="sm:ml-20 sm:w-[70%] flex-col justify-center">
                        <p className="font-[1000] text-[25px] py-[5px]">TALLAS</p>
                            <SizeProductView />
                           
                        </div>

                    </div >



                </div>

                <div className="ml-[40px] font-darker-grotesque text-black text-xl mt-[20px] mb-[200px]">
                    <p className="font-bold text-3xl">Comentarios</p>

                </div>

            </div>
            <div className='max-w-[1980px] justify-center sm:justify-between mx-10 flex flex-wrap'>
                <Recomendation />
            </div>
            <Footer />


        </>
    )
}
export default ProductView