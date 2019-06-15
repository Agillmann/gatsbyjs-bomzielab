import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
import Particles from "react-particles-js"
import PageTransition from "gatsby-plugin-page-transitions"

import "../scss/main.scss"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  particlesOptions = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 3,
      },
      color: {
        value: ["#005AFF", "#ffa500"],
      },
    },

    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  }
  render() {
    return (
      <PageTransition>
        <main>
          <Particles className="particles" params={this.particlesOptions} />
          <div className="container">
            <div className="main-layout">
              <Header />
              {this.props.children}
            </div>
            <Footer />
          </div>
        </main>
      </PageTransition>
    )
  }
}

export default Layout
