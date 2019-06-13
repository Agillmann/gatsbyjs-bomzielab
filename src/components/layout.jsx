import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <main>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default Layout
