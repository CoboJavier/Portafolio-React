import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Educaciòn</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Colegio Técnico "Don Bosco"</h3>
              <p className="info">Bachiller en electrónica de consumo <span>•</span> <em className="date">Abril 2014</em></p>
              <p>
                
              </p>
            </div>
          </div> {/* item end */}

          <div className="row item">
            <div className="twelve columns">
              <h3>Universidad Politécnica Salesiana</h3>
              <p className="info">Ingeniería de Sistemas con mención en informática para la gestión  <span>•</span> <em className="date">Julio 2020</em></p>
              <p>
                
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Trabajo</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>HOSPITAL DE ESPECIALIDADES EUGENIO ESPEJO</h3>
              <p className="info">Pasante <span>•</span> <em className="date">Junio 2019 - Agosto 2019</em></p>
              <p>
              Soporte técnico (HelpDesk).
              Instalación y configuración de Redes.
              Desarrollo de aplicaciones web con conexión a base de datos.

              </p>
            </div>
          </div> {/* item end */}
          
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Habilidades</span></h1>
        </div>
        <div className="nine columns main-col">
          
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand css" /><em>Java</em></li>
              <li><span className="bar-expand css" /><em>PHP</em></li>
              <li><span className="bar-expand css" /><em>NodeJS</em></li>
              <li><span className="bar-expand css" /><em>Javascript</em></li>
              <li><span className="bar-expand css" /><em>Express</em></li>
              <li><span className="bar-expand css" /><em>HTML5</em></li>
              <li><span className="bar-expand css" /><em>SQL</em></li>
              <li><span className="bar-expand illustrator" /><em>MongoDB</em></li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}
