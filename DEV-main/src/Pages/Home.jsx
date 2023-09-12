import { Categorias } from '../componentes/Categorias'
import { Slider } from '../componentes/Slider'
import { Footer } from '../componentes/Footer'
import { NavBar } from '../componentes/NavBar'


export const Home = () => {
    return (
        <div>
            <NavBar />
            <div className=" max-w-[1780px] grid lg:grid-cols-3  grid-cols-1 justify-center mt-9 pb-3 pt-5 mx-auto text-white">
                <Categorias
                    to="/Categoria-Hombre"
                    title="HOMBRE"
                    image="/src/assets/imagenes/Generos/Hombre.png"
                    alt="Categoría Hombre"
                ></Categorias>

                <Categorias
                    to="/Categoria-Mujer"
                    title="MUJER"
                    image="/src/assets/imagenes/Generos/Mujer.png"
                    alt="Categoría Mujer"
                ></Categorias>

                <Categorias
                    to="/Categoria-Niño"
                    title="NIÑO"
                    image="/src/assets/imagenes/Generos/Niño.png"
                    alt="Categoría Niño"
                ></Categorias>

            </div>

            <div className='mr-1 sm:max-w-[1780px] sm:mx-[20px]  max-h-[1050px] overflow-hidden'>

                <Slider velocidad = '500' intervalo = '5000' />
            </div>

            <Footer />
        </div>
    )
}
