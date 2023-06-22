import React from 'react'

export default function Seguridad () {
    return (
        <div className='service-container'>
            <div className='service-title'>
                <h1>Indústria - Seguridad</h1>
            </div>
            <div className='service-section-container'>
                <div className='service-contact-container'>
                    <div>
                        <h5>Indústria</h5>
                        <h2>Seguridad (Safety)</h2>
                    </div>
                    <div>
                        <p>Para los fabricantes de sistemas instrumentados de seguridad, es de suma importancia garantizar que estos sistemas funcionen de manera confiable, eficiente y segura.</p>
                        <p>Basado en los estándares IEC 61508, 61511 y 62443, Defensio Security colabora para establecer las mejores prácticas de seguridad operativa para mantener una condición segura dentro y fuera de los entornos de producción.</p>
                        <p>Aplicando los conceptos HAZOP, LOPA y QRA logramos dilucidar los escenarios más significativos, sus categorizaciones y frecuencias tolerables para ciertos eventos peligrosos (hazardous), además de asignar categorías de riesgo y determinar qué Capas de Protección Independiente (IPLs) deben estar vigentes.</p>
                    </div>
                </div>
                <div className='service-contact-container'>
                    <h3>Hable con nosotros</h3>
                    <p>Hable con uno de nuestros especialistas y conozca cómo podemos ayudarlo a tener mayores controles de seguridad para su área y cómo implementar las mejores prácticas dentro de este sector. </p>
                    <a href="/contacto" className="hvr-sweep-to-right ">CLICK AQUÍ</a>
                </div>
            </div>
        </div>
    )
}