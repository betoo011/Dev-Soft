import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const helpLink = 'text-black text-[16px] sm:text-[15px] sm:hover:scale-125 duration-150'

export const Footer = () => {
    return (
        <footer>
            <section>

                <div className="flex flex-wrap justify-center gap-x-16 sm:gap-x-0 sm:grid sm:grid-cols-3 sm:place-items-center mt-16 sm:w-full sm:h-[200px]">

                    <div className=" h-[90%] py-2 my-5 flex-col space-y-1">

                        <h3 className='my-4 sm:my-1 sm:text-center text-black font-semibold text-[18px] sm:text-[15px]'>Ayuda</h3>

                        <a href="">
                            <p className={helpLink} >Envío</p>
                        </a>

                        <a href="">
                            <p className={helpLink}>Garantia</p>
                        </a>

                        <a href="">
                            <p className={helpLink}>Preguntas Frecuentes</p>
                        </a>

                    </div>

                    <div className=" h-[90%] py-2 my-5 sm:my-2 flex-col space-y-1">

                        <h3 className='my-2 text-center text-black font-semibold text-[18px] sm:text-[15px]'>Contactanos</h3>

                        <div className="flex hover:scale-125 duration-100 group">

                            <div className=" flex items-center h-[40px] pb-[15px]">
                                <a href="https://web.whatsapp.com/send/?phone=3105689965&text&type=phone_number&app_absent=0">
                                    <FontAwesomeIcon className='text-[30px] group-hover:text-[#25D366]' icon={faWhatsapp} />
                                </a>
                            </div>

                            <div className="">
                                <a href="https://web.whatsapp.com/send/?phone=3105689965&text&type=phone_number&app_absent=0">
                                    <p className='text-black text-[16px] sm:text-[15px] px-3'>307 674 56 34</p>
                                </a>
                            </div>

                        </div>


                    </div>

                    <div className="h-[90%] w-screen sm:w-auto my-6 sm:py-2 sm:my-4 flex-col space-y-1">

                        <h3 className='text-[18px] my-2 text-center text-black font-semibold sm:text-[15px]'>Redes</h3>

                        <div className='flex justify-center sm:justify-between gap-[50px] text-[25px] '>
                            <a href="">
                                <FontAwesomeIcon className='hover:text-[#1DA1F2] hover:scale-150 duration-100 cursor-pointer' icon={faTwitter} />
                            </a>
                            <a href="">
                                <FontAwesomeIcon className='hover:text-[#0078F7] hover:scale-150 duration-100 cursor-pointer' icon={faFacebook} />
                            </a>

                            <a href="">
                                <FontAwesomeIcon className='hover:text-[#E1306C] hover:scale-150 duration-100 cursor-pointer' icon={faInstagram} />
                            </a>
                        </div>

                    </div>

                </div>


            </section>
        </footer>
    )
}
export default Footer
