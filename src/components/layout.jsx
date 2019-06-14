import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
import Particles from "react-particles-js"
import '../scss/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  particlesOptions = {
    "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      },
      "color": {
        "value": ["#005AFF","#ffa500"]
      },
    },
  
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
  }
  render() {
    return (
      <main>
        <Particles className='particles' params={this.particlesOptions}/>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default Layout
