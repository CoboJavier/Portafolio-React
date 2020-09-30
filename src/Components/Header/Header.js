import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header id="home" >
        <nav id="nav-wrap" class="navbar navbar-dark bg-dark">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
          <li class="current"><a class="smoothscroll" href="#home">Inicio</a></li>
            <li><a class="smoothscroll" href="#about">Acerca de mi</a></li>
	         <li><a class="smoothscroll" href="#resume">Currículum</a></li>
            <li><a class="smoothscroll" href="#portfolio">Trabajos</a></li>
            <li><a class="smoothscroll" href="#contact">Contacto</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Soy Javier Cobo.</h1>
            <h3>Desarollador <span>Frontend y BackEnd </span> creador de increibles aplicaciones web con <span>React y NodeJs</span>. 
            Continua <a className="smoothscroll" href="#about">bajando</a> y conoceme más <a className="smoothscroll" href="#about">acerca de mi</a>.</h3>
            <hr />
            <ul className="social">
              <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/javcob"><i className="fa fa-twitter" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/javier-cobo96/"><i className="fa fa-linkedin" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/CoboJavier"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}