import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 style={{ margin: 0 }}>
        <img className="bot_logo" src="sussybot.svg"/><br/>
        <img className="bot_rext" src="sussytext.svg"/>
        <div className="greenbg"></div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
