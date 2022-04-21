import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = ({ siteTitle }) => (
  <nav className="nav">
    <div>
      <h1 style={{ margin: 0 }}>
        <div className="greenbg"></div>
      </h1>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
