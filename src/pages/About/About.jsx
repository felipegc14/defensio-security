import React from 'react'
/* import Nav from '$Components/Nav/Nav'
import Footer from '$Components/Footer/Footer' */
import './about.scss';


export default function About () {
    return (
        <div className='service-container'>
            <div className='service-title'>
                <h1>Sobre nosotros</h1>
            </div>
            <div className='service-section-container'>
            <div className='contact-container'>
                <h4 className='about-subtitle'>Sobre Nosotros</h4>
                <h1>Visibilidad y Protección para Entorno de Automatización Industrial ICS SCADA</h1>
                <section> 
                <p>Nuestra Misión es garantizar que nuestros sectores industriales críticos estén protegidos de las ciberamenazas,</p>
                <p>
                    Este es nuestro aporte a estos sectores generadores de riqueza, que son importantes en nuestro país.
                </p>
                <p>
                    Defensio Security protege contra las "interrupciones operativas" causadas por "Ciberamenazas, información privilegiada malintencionada y errores humanos, brindando visibilidad, control y protección".
                </p>
                <p>
                    Creemos que no existe una tecnología mágica que pueda resolver todos los problemas.
                </p>
                <p>
                    Defensio Security siempre se preocupa por estudiar soluciones y extraer lo mejor de cada tecnología para mitigar incidentes, componiendo siempre las mejores soluciones en su entrega.
                </p>
                </section>
            </div>
            <div>
            <a href="/contacto" className="hvr-sweep-to-right ">CONSULTENOS</a>
            </div>
            </div>
        </div>
    )
}