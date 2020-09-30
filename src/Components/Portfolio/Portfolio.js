import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Algunos de mis trabajos.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img src="images/portfolio/calendar.jpg" alt=""/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Calendar App</h5>
                        <p>Página web</p>
                      </div>
                    </div>
                    <div className="link-icon">

                    <i className="icon-plus" />
                    
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img src="images/portfolio/gify.jpg" alt=""/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>GifExpertApp</h5>
                        <p>Página web</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img  src="images/portfolio/heroe.jpg" alt=""/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>HeroesApp</h5>
                        <p>Página web</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              
              
              
            </div> 
          </div> 
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-calendar.jpg" alt="" />
            <div className="description-box">
              <h4>Calendar App</h4>
              <p>Página web para establecer recordatorios en un calendario. Desarollado con REACT bajo el MERN Stack.</p>
              
            </div>
            <div className="link-box">
              <a href="https://lucid-dijkstra-65d92b.netlify.app" target="_blank" rel="noopener noreferrer">Abrir</a>
              <a className="popup-modal-dismiss" href="#/">Cerrar</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-gify.jpg" alt="" />
            <div className="description-box">
              <h4>GifExpert App</h4>
              <p>Aplicación que busca 10 gifs aleatorios por medio de la API "giphy".</p>
              
            </div>
            <div className="link-box">
              <a href="https://cobojavier.github.io/gif-expert-react-app/" target="_blank" rel="noopener noreferrer">Abrir</a>
              <a className="popup-modal-dismiss" href="#/">Cerrar</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-heroe.jpg" alt="" />
            <div className="description-box">
              <h4>HeroesApp</h4>
              <p>Aplicaion web construida en React, como tributo a algunos superheroes de Marvel y DC.</p>
              
            </div>
            <div className="link-box">
              <a href="https://nostalgic-murdock-af23dd.netlify.app" target="_blank" rel="noopener noreferrer">Abrir</a>
              <a className="popup-modal-dismiss" href="#/">Cerrar</a>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss" href="#/">Close</a>
            </div>
          </div>
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss" href="#/">Close</a>
            </div>
          </div>
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss" href="#/">Close</a>
            </div>
          </div>
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss" href="#/">Close</a>
            </div>
          </div>
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss" href="#/">Close</a>
            </div>
          </div>
        </div> 
      </section>
    )
  }
}