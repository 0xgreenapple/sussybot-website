import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ButtonBG from "/static/button-bg.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <>
      <h1 style={{ margin: 0 }}>
        

        <img className="bot_logo" src="sussybot.svg"/><br/>
        <img className="bot_rext" src="sussytext.svg"/>
        <p className="desc-text">yet another entertainment bot</p>
        <div className="button-container">
          <Link to="#" className="join-link">
            <ButtonBG className="btn-bg"/>
            <span>Join Server</span>

          </Link>
        </div>
      </h1>
    </>
    
  </Layout>
)

export default IndexPage
