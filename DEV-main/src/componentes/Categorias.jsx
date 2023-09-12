import { Link } from "react-router-dom"
export const Categorias = (props) => {
    return (
        <>
            <Link className="cursor-pointer" to={props.to}>
                <h1 className="font-darker-grotesque text-[23px] font-bold no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">{props.title}</h1>

                <div className="flex justify-center  overflow-hidden rounded-[15px]">
                    <img className=" ms-0 rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[80%] h-[340px] sm:w-[60%] sm:h-[350px] lg:w-[90%] md:h-[490px] max-w-[95%] max-h-[490px]" src={props.image}
                        width="50%" alt={props.alt} />
                </div>
            </Link>
        </>

    )
}
