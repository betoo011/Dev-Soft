import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"
import { Input } from '../componentes/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faUser, faPhone, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export const Registro = () => {

  const [EMAIL, cambiarEMAIL] = useState({ campo: '', valido: null });
  const [PASSWORD, cambiarPASSWORD] = useState({ campo: '', valido: null });
  const [NOMBRE, cambiarNOMBRE] = useState({ campo: '', valido: null });
  const [APELLIDO, cambiarAPELLIDO] = useState({ campo: '', valido: null });
  const [TELEFONO, cambiarTELEFONO] = useState({ campo: '', valido: null });
  const [terminos, cambiarTERMINOS] = useState(false);
  const [formulariovalido, cambiarformulariovalido] = useState(null);

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onChangeTerminos = (e) => {
    cambiarTERMINOS(e.target.checked);
  }

  const history = useNavigate(); // Obtiene la instancia de history
  const [mostrarCarga, setMostrarCarga] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (EMAIL.valido === 'true' && PASSWORD.valido === 'true' && NOMBRE.valido === 'true' && APELLIDO.valido === 'true' && TELEFONO.valido === 'true' && terminos) {
      cambiarformulariovalido(true);
      cambiarEMAIL({ campo: '', valido: null });
      cambiarPASSWORD({ campo: '', valido: null });
      cambiarNOMBRE({ campo: '', valido: null });
      cambiarAPELLIDO({ campo: '', valido: null });
      cambiarTELEFONO({ campo: '', valido: null });

      // Mostrar animación de carga

      setTimeout(() => {
        setMostrarCarga(true);
      }, 1000)


      // Esperar durante un tiempo antes de redirigir
      setTimeout(() => {
        // Ocultar la animación de carga y redirigir
        setMostrarCarga(false);
        history('/login');
      }, 3000); // Cambia el valor según el tiempo de retraso deseado

    } else {
      cambiarformulariovalido(false);
    }
  }

  return (

    <form className='flex justify-center items-center h-screen' onSubmit={onSubmit}>

      {mostrarCarga && (
        <div className="loader-container fixed top-0 left-0 w-full h-full bg-black/50 flex
        justify-center  items-center z-[9999]">
          {/* Agrega aquí tu animación de carga */}
          <div className="loader  border-[3px] border-[#f3f3f3]  border-t-[3px] border-t-[#3498db] rounded-[50%] w-[50px] h-[50px] animate-[spin_2s_linear_infinite]"></div>
        </div>
      )}

      <div className='h-[580px] w-[400px] bg-white rounded-2xl relative'>
        <Link to={"/"}>
          <img src="src/assets/imagenes/Logo-dev.png" alt="" className=" h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Link>
        <div className='h-full flex flex-col pt-6 items-center'>
          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">REGISTRATE</h1>

          <Input
            estado={EMAIL}
            cambiarEstado={cambiarEMAIL}
            tipo="email"
            icono={faEnvelope}
            label="E-MAIL"
            name="e-mail"
            leyendaError="Solo puede contener letras, numeros, puntos, guiones y guion bajo"
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={PASSWORD}
            cambiarEstado={cambiarPASSWORD}
            tipo="password"
            icono={faLock}
            label="PASSWORD"
            name="password"
            leyendaError="Tiene que ser de 4 a 12 dígitos"
            expresionRegular={expresiones.password}
          />
          <Input
            estado={NOMBRE}
            cambiarEstado={cambiarNOMBRE}
            tipo="text"
            icono={faUser}
            label="NOMBRE"
            name="nombre"
            leyendaError="Tiene que ser de 4 a 16 dígitos y solo puede contener letras"
            expresionRegular={expresiones.nombre}
          />

          <Input
            estado={APELLIDO}
            cambiarEstado={cambiarAPELLIDO}
            tipo="text"
            icono={faUser}
            label="APELLIDO"
            name="apellido"
            leyendaError="Tiene que ser de 4 a 16 dígitos y solo puede contener letras"
            expresionRegular={expresiones.apellido}
          />
          <Input
            estado={TELEFONO}
            cambiarEstado={cambiarTELEFONO}
            tipo="text"
            icono={faPhone}
            label="TELEFONO"
            name="telefono"
            leyendaError="Solo puede contener numeros y el maximo son 14 dígitos "
            expresionRegular={expresiones.telefono}
          />




          <div className='mt-6 mb-2 relative font-darker-grotesque text-[16px] right-8'>
            <input type="checkbox" className='cursor-pointer' checked={terminos} onChange={onChangeTerminos} />   He leido y acepto las <a href="./Politica y Privacidad Dev-Soft.pdf" target="_blank"><b>politicas de privacidad</b></a>
          </div>


          {formulariovalido === false && <div className='pt-1 bg-red-400 h-[30px] w-[350px] rounded-[3px] '>
            <p className='text-[14px] font-sans'>
              <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
              <b className='ml-2'>Error:</b> Porfavor rellene los campos correctamente.
            </p>
          </div>}
          <div className='flex items-center flex-col font-darker-grotesque mt-2'>
            <input type="submit" value="CREAR CUENTA" className='py-1  w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
          </div>
          {formulariovalido && <p className='text-[13px] font-sans text-green-600 '>Su cuenta se ha creado correctamente!</p>}
        </div>
      </div>


    </form>


  )
}