import React from "react"
import { Link } from "gatsby"
import Icon from "../images/svg-icons/logo-bomzielab.svg"

const Header = () => {
  return (
    <header>
      <Icon />
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-item" activeClassName="active-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
