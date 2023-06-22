import React from 'react'
// import Nav from '$Components/Nav/Nav'
import home1 from '@/assets/hometitle.png'
import home2 from '@/assets/LaEscondidaDeNoche.jpg'
import './home.scss';
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home () {
    return (
        <div className='home-container'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div id='carouselImage' className="carousel-item active">
                    <img src={home1} className="d-block w-100" alt="Defensio security" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center gap-5">
                    <h1 className='h1Home'>SOCIO EFICAZ DE CIBERSEGURIDAD PARA SECTORES CRITICOS E INDUSTRIALES</h1>
                    <a href="/sobre-nosotros" className="hvr-sweep-to-right ">SABER MÁS <HiArrowNarrowRight /></a>
                </div>
                </div>
                <div id='carouselImage' className="carousel-item">
                        <img src={home2} className="d-block w-100" alt="Ciberseguridad" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center gap-5">
                        <h1 className='h1Home'>MANTENGA LA EXCELENCIA OPERACIONAL DE SUS PROCESOS PRODUCTIVOS</h1>
                        <a href="/sobre-nosotros" className="hvr-sweep-to-right ">SABER MÁS <HiArrowNarrowRight /></a>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
            {/* <div className='home-title'>
                <section className='blog-section'>
                    <h2>Blog</h2>
                    <div className='div-blog'>
                        <div className="card">
                        <img src={home1} className="card-img-top" alt="defensio" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button-card">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                        <img src={home2} className="card-img-top" alt="defensio" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="button-card">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
        </div>
    )
}