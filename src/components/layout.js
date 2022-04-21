/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="main-wrapper">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main className="w">{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
             {new Date().getFullYear()}, made by
            {` `}
            <a href="https://twitter.com/0xgreenapple">0xgreenapple</a>
          </footer>
        </div>
        <div className='moving-background'></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
