import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="footer"
            style={{
              marginTop: `2rem`,
            }}
          >
            <p> {new Date().getFullYear()}, made by
            {` `}
            <a href="https://twitter.com/0xgreenapple">0xgreenapple</a>
            </p>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
