import React from "react";
import { Route, Switch } from 'react-router-dom'
import NavScroll from '$Components/Nav/NavBar.jsx'
import Footer from '$Components/Footer/Footer.jsx'
import Home from '$Pages/Home/Home'
import About from '$Pages/About/About'
import Contact from '$Pages/Contact/Contact'
import Energia from '$Pages/Industry/Energia/Energia'
import Farmaceutica from '$Pages/Industry/Farmaceutica/Farmaceutica'
import Healthcare from '$Pages/Industry/Healthcare/Healthcare'
import Quimica from '$Pages/Industry/Quimica/Quimica'
import Manufactura from '$Pages/Industry/Manufactura/Manufactura'
import Seguridad from '$Pages/Industry/Seguridad/Seguridad'
import Maritima from '$Pages/Industry/Maritima/Maritima'
import Transporte from '$Pages/Industry/Transporte/Transporte'
import Saneamiento from '$Pages/Industry/Saneamiento/Saneamiento'
import Oilgas from '$Pages/Industry/Oilgas/Oilgas'
import Mineria from '$Pages/Industry/Mineria/Mineria'
import { Conciencia, Evaluacion, Gobernanza, Mitigacion, Monitoreo, MDR } from "./pages/Service";

import './App.css'

function App() {

  return (
    <div className='App'>
      <Route exact path={['/', '/sobre-nosotros', '/contacto', '/energia',
'/farmaceutica',
'/healthcare',
'/quimica',
'/manufactura',
'/seguridad',
'/maritima',
'/transporte',
'/saneamiento',
'/oil&gas',
'/mineria',
'/servicios/conciencia-y-capacitacion',
'/servicios/evaluacion-de-riesgos-ciberneticos',
'/servicios/mitigacion-de-riesgos-ciberneticos',
'/servicios/monitoreo-y-respuesta-a-incidententes-ciberneticos',
'/servicios/gobernanza-y-cumplimiento',
'/servicios/servicio-MDR-de-ti-to'
]} component={NavScroll} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sobre-nosotros' component={About} />
          <Route exact path='/contacto' component={Contact} />
          <Route exact path='/energia' component={Energia} />
          <Route exact path='/farmaceutica' component={Farmaceutica} />
          <Route exact path='/healthcare' component={Healthcare} />
          <Route exact path='/quimica' component={Quimica} />
          <Route exact path='/manufactura' component={Manufactura} />
          <Route exact path='/seguridad' component={Seguridad} />
          <Route exact path='/maritima' component={Maritima} />
          <Route exact path='/transporte' component={Transporte} />
          <Route exact path='/saneamiento' component={Saneamiento} />
          <Route exact path='/oil&gas' component={Oilgas} />
          <Route exact path='/mineria' component={Mineria} />
          <Route exact path='/servicios/conciencia-y-capacitacion' component={Conciencia} />
          <Route exact path='/servicios/evaluacion-de-riesgos-ciberneticos' component={Evaluacion} />
          <Route exact path='/servicios/mitigacion-de-riesgos-ciberneticos' component={Mitigacion} />
          <Route exact path='/servicios/monitoreo-y-respuesta-a-incidententes-ciberneticos' component={Monitoreo} />
          <Route exact path='/servicios/gobernanza-y-cumplimiento' component={Gobernanza} />
          <Route exact path='/servicios/servicio-MDR-de-ti-to' component={MDR} />
        </Switch>
      <Route exact path={['/', '/sobre-nosotros', '/contacto', '/energia',
'/farmaceutica',
'/healthcare',
'/quimica',
'/manufactura',
'/seguridad',
'/maritima',
'/transporte',
'/saneamiento',
'/oil&gas',
'/mineria',
'/servicios/conciencia-y-capacitacion',
'/servicios/evaluacion-de-riesgos-ciberneticos',
'/servicios/mitigacion-de-riesgos-ciberneticos',
'/servicios/monitoreo-y-respuesta-a-incidententes-ciberneticos',
'/servicios/gobernanza-y-cumplimiento',
'/servicios/servicio-MDR-de-ti-to']} component={Footer} />
    </div>
  )
}

export default App
