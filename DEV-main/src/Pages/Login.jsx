import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {
  useEffect(() => {
    const emailInput = document.getElementById('email_input');
    const passwordInput = document.getElementById('pass_input');

    const handleInput = event => {
      const input = event.target;
      const label = input.nextElementSibling;

      if (input.value) {
        input.classList.add('border-gray-400', 'border-b-2');
        label.classList.add('-translate-y-5');
      } else {
        input.classList.remove('border-gray-400', 'border-b-2');
        label.classList.remove('-translate-y-5');
      }
    };

    emailInput.addEventListener('input', handleInput);
    passwordInput.addEventListener('input', handleInput);

    return () => {
      emailInput.removeEventListener('input', handleInput);
      passwordInput.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='h-[420px] w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <form className='h-full flex flex-col pt-6 items-center'>
          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">ACCEDE A TU CUENTA</h1>

          <div className=' mt-20 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faUser} className='absolute left-[-20px] leading-[30px]' />
            <input type="text" id="email_input" className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />
            <label htmlFor="email" id='email_label' className='absolute left-0 text-gray-400 text-[13px] transition-all duration-500 pointer-events-none peer-focus:-translate-y-5'>E-MAIL</label>
          </div>

          <div className='mt-10 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faLock} className='absolute left-[-20px] leading-[30px]' />
            <input type="password" id="pass_input" className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />
            <label htmlFor="contraseña" id='pass_label' className='absolute left-0 text-gray-400 text-[13px] transition-all duration-500 pointer-events-none peer-focus:-translate-y-5'>CONTRASEÑA</label>
          </div>

          <div className='flex items-center flex-col pt-10 font-darker-grotesque  '>
            <input type="button" value="INICIAR SESION" className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
            <Link to='/register' className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm text-center'>
              <button className='' type="button" >REGISTRATE
              </button>

            </Link>
          </div>

          <div className='relative left-[-55px] font-sans'>
            <a className='text-gray-400 hover:text-gray-600 text-[14px]' href="">¿Has olvidado la contraseña?</a>
          </div>

        </form>
      </div>


    </div>


  )

}