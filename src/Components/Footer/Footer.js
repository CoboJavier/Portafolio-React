import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/javier.cobo.5" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/javcob" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/javier-cobo96/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/CoboJavier" target="_blank"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 Cobo-Javier</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    )
  }
}
