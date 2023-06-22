import React from 'react'
import './footer.scss';
import { BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer () {
    return(
        <div className='footer-container'>
            <div className='sobre-nosotros'>
                <h2 className='sobreh2'>Sobre nosotros</h2>
                <p>Nuestro propósito es hacer menos complejo el día a día de las empresas y sus empleados.</p>
                <div className='redes'>
                <a href="https://www.linkedin.com/company/defensio-security" target="_blank" ><BsLinkedin className='logoRedes' size={20} /></a>
                </div>
            </div>
            <div className='contactanos'>
                <h2 className='sobreh2'>Contáctenos</h2>
                <div className='datos-contacto'>
                    <div className='d-flex align-items-center flex-row gap-2'>
                        <BsFillTelephoneFill /> +55 11 3434-6638
                    </div>
                    <div className='d-flex align-items-center flex-row gap-2'>
                        <AiOutlineMail /> contacto@defensiosecurity.com
                    </div>
                    <div className='d-flex align-items-center flex-row gap-2'>                      
                        <FaMapMarkerAlt /> CHI: Eldorado Business Tower – La Paz 2315 – Viña del Mar
                    </div>
                    <div className='d-flex align-items-center flex-row gap-2'>
                        <FaMapMarkerAlt /> BRA: R. Hilda Del Nero Bisquolo, 102 - Jardim Florida, Jundiaí - SP
                    </div>
                    <div className='d-flex align-items-center flex-row gap-2'>
                        <FaMapMarkerAlt /> URU: Dr. Fleming Alejandro 1506 – Nro. App 203 - Montevideo
                    </div>
                </div>
            </div>
        </div>
    )
}