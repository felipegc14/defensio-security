import React, { useState } from 'react'
import './nav.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '@/assets/logosinfondo3.png'


// Colocar aqui las nuevas rutas

export default function NavScroll () {
  const [color, setColor] = useState(false)
  const changeBgcolor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeBgcolor)

  return (
    <Navbar className={color ? 'navColor' : 'nav'} expand="lg">
      <Container className='nav-container'>
      <div className='container-logo'>
        <Navbar.Brand className='logo' href="/">
        {/* DEFENSIO LOGO */}
        <img src={logo} className="logoImg" alt="Defensio security" />
        </Navbar.Brand>
      </div>
      <div className='container-links'>
      <Navbar.Toggle className='toggle' />
        <Navbar.Collapse className='collapse' >
          <Nav
            className="fs-5 h-100 d-flex align-items-center gap-3 me-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' href="/">Home</Nav.Link>
              <NavDropdown className='linkDrop' title="Servicios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/servicios/evaluacion-de-riesgos-ciberneticos">
                  Evaluación de riesgos ciberneticos
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicios/mitigacion-de-riesgos-ciberneticos">
                  Mitigación de riesgos ciberneticos
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicios/monitoreo-y-respuesta-a-incidententes-ciberneticos">
                  Monitoreo y respuesta a incidententes ciberneticos
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicios/gobernanza-y-cumplimiento">
                  Gobernanza y cumplimiento
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicios/conciencia-y-capacitacion">
                  Conciencia y capacitación
                </NavDropdown.Item>
                <NavDropdown.Item href="/servicios/servicio-MDR-de-ti-to">
                  Servicio MDR de ti to
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='linkDrop' title="Indústrias" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/farmaceutica">
                  Farmacéutica
                </NavDropdown.Item>
                <NavDropdown.Item href="/healthcare">
                  Health care
                </NavDropdown.Item>
                <NavDropdown.Item href="/quimica">
                  Química
                </NavDropdown.Item>
                <NavDropdown.Item href="/manufactura">
                  Manufactura
                </NavDropdown.Item>
                <NavDropdown.Item href="/seguridad">
                  Seguridad
                </NavDropdown.Item>
                <NavDropdown.Item href="/maritima">
                  Marítima
                </NavDropdown.Item>
                <NavDropdown.Item href="/transporte">
                  Transporte
                </NavDropdown.Item>
                <NavDropdown.Item href="/saneamiento">
                  Saneamiento 
                </NavDropdown.Item>
                <NavDropdown.Item href="/oil&gas">
                  Oil & gas
                </NavDropdown.Item>
                <NavDropdown.Item href="/mineria">
                  Minería
                </NavDropdown.Item>
                <NavDropdown.Item href="/energia">
                  Energía
                </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link className='link' href="/sobre-nosotros">
            Sobre Nosotros
            </Nav.Link>
            <Nav.Link className='link' href="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      </Container>
    </Navbar>
  )
}