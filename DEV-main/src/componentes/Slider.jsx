import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft as Left, faChevronRight as Right, faCircle } from "@fortawesome/free-solid-svg-icons"
import { sliderimg } from "../data/sliderimg.json"
import { Link } from 'react-router-dom'
import { useRef } from "react"
import { useCallback } from "react"



export const Slider = ({ velocidad = '500', intervalo = '5000', }) => {


    const containerSlide = useRef(null);
    const slideInterval = useRef(null);

    const nextSlide = useCallback(() => {

        //Se comprueba que el Contenedor del Slider tenga elementos
        if (containerSlide.current.children.length > 0) {


            //Obtenemos el primer elemento del contenedor
            const firstSlide = containerSlide.current.children[0];

            containerSlide.current.style.transition = `${velocidad}ms ease-out all`;

            const slideSize = containerSlide.current.children[0].offsetWidth;


            containerSlide.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // Reiniciamos la posicion del Slideshow.
                containerSlide.current.style.transition = 'none';
                containerSlide.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                containerSlide.current.appendChild(firstSlide);

                containerSlide.current.removeEventListener('transitionend', transition);
            }


            // Eventlistener para cuando termina la animacion.
            containerSlide.current.addEventListener('transitionend', transition);
        }

    }, [intervalo]);

    const prevSlide = () => {

        if (containerSlide.current.children.length > 0) {
            //Obtenemos el último elemento

            const index = containerSlide.current.children.length - 1;

            const lastSlide = containerSlide.current.children[index];

            containerSlide.current.insertBefore(lastSlide, containerSlide.current.firstChild);

            containerSlide.current.style.transition = 'none';
            const slideSize = containerSlide.current.children[0].offsetWidth;
            containerSlide.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                containerSlide.current.style.transition = `${velocidad}ms ease-out all`;
                containerSlide.current.style.transform = `translateX(0)`;
            }, 30);

        }

    }

    const styleBottom = "pointer-events-auto bg-none border-none cursor-pointer outline-none w-[50px] sm:w-[80px] h-[100%] text-center absolute ease-in-out duration-300 group-hover:text-white group-hover:scale-110"


    return (
        <div className="relative group  mt-[2rem] rounded-[15px]">

            <div className="text-center py-[1rem] ">
                <h3 className='font-darker-grotesque text-[23px] font-semibold no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3' >TENDENCIAS</h3>
            </div>

            <div ref={containerSlide} className="flex flex-nowrap rounded-[15px]  h-[460px] md:h-[800px] ">

                {sliderimg.map((sliderimg) => (

                    <div key={sliderimg.id} className="rounded-[15px] h-full  min-w-full overflow-hidden z-10 relative">

                        <Link to="/login" className="w-full h-5/6 md:h-11/12 pointer-events-none md:pointer-events-auto" >
                            <img className="align-top h-full w-full object-cover relative " src={sliderimg.url} alt="" />

                            <button className="absolute md:hidden z-40 bg-blue-600 text-white text-[19px]
                            top-[80%] left-1/2 transform -translate-x-1/2 sm:-translate-y-[80%] -translate-y-[100%]
                            pointer-events-auto h-8 sm:h-[50px] w-[150px]  border-2 border-black rounded-[5px] ">Read more</button>

                        </Link>

                        <div className=" h-1/6 md:h-[5%] bg-black/95 text-white relative sm:absolute 
                        w-full py-[10px] px-[60px] bottom-[4rem] sm:bottom-0 text-center text-[14px] sm:text-base">

                            <p>{sliderimg.p}</p>
                        </div>

                    </div>
                ))};

            </div>

            <div className="Controles absolute top-[6rem] z-20 w-full  h-[85%]  pointer-events-none">

                <button onClick={prevSlide} className={`${styleBottom} left-0 sm:left-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[60px]" icon={Left}> </FontAwesomeIcon>
                </button>

                <button onClick={nextSlide} className={`${styleBottom} right-0 sm:right-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[60px]" icon={Right}> </FontAwesomeIcon>
                </button>

            </div>

        </div >
    )
}
