import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>Acerca de mi</h2>
            <p>
            Actualmente soy desarrollador Frontend y BackEnd, amante de Javascript y React librería con la que trabajo actualmente, me dedico a realizar aplicaciones web SPA, con el uso de MERN stack.
            
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Detalles de contacto</h2>
                <p className="address">
                  <span>Francisco Javier Cobo Valle</span><br />
                  <span>Quito-Ecuador<br />
                
                  </span>
                  <span>(593)90317476</span><br />
                  <span>fcobo9608@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/Curriculum_Cobo-Javier (3).pdf" className="button" target="_blank"><i className="fa fa-download" />Descargar CV</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
