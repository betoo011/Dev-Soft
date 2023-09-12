import CategoriasNav from '../componentes/CategoriasNav'
import Footer from '../componentes/Footer'
import { Link, useParams } from 'react-router-dom'
import { Recomendation } from '../componentes/Recomendation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { NavBar } from '../componentes/NavBar'

export const Categorys = ({ listCategorys}) => {

  return (
    <>
      <NavBar />
      <CategoriasNav />

      <div className='flex justify-center items-center py-[10px] mt-4'>
        <h1 className='text-[18px] font-darker-grotesque font-semibold ' >CATEGORIAS</h1>
      </div>

      <div className="max-w-[1980px] justify-center flex flex-wrap text-white mb-10  gap-y-[1rem]">
        {listCategorys.map((listCategorys) => (
          <Link key={listCategorys.id} to={`${listCategorys.fatherPath}${listCategorys.path}`} className="cursor-pointer">

            <h3 className="sm:hidden my-5 font-darker-grotesque text-[23px] font-semibold no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{listCategorys.name}</h3>

            <div className="flex justify-center overflow-hidden ">
              <img className=" ms-0  hover:scale-105 sm:hover:scale-125 transition-all duration-500 rounded-[15px] w-[330px] h-[330px] sm:rounded-none sm:w-[330px] sm:h-[330px]  max-w-[100%] max-h-[490px]" src={listCategorys.image}
                alt={listCategorys.alt} />
            </div>

            <h3 className="hidden sm:block font-darker-grotesque text-[23px] font-semibold no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{listCategorys.name}</h3>
          </Link>
        ))}
      </div>

      <div className=' mx-[1rem]  my-[2rem] text-center 
                      lg:text-left text-[18px] font-darker-grotesque font-semibold flex'>
        <Link to={"all"}>
          <button className='border border-black rounded-[10px] bg-white hover:bg-white/25 hover:scale-105'>
            <p className='text-black mx-2'>Ver todos los productos
              <FontAwesomeIcon className='mx-2' icon={faAnglesRight} />
            </p>
          </button>
        </Link>
      </div>

      <hr className='h-[2px] bg-black mb-10' />

      <div className='max-w-[1980px] justify-center sm:justify-between mx-10 flex flex-wrap'>
        <Recomendation />
      </div>

      <Footer />
    </>

  )
}
