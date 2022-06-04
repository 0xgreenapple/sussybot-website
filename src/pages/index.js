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
        
        <div className="sussybottext">
          <img className="bot_1" src="sussy.svg"/>
          <img className="bot_2" src="bot.svg"/>
        </div>
        <p className="desc-text">Sussy-bot a general purpose entertainment bot</p>
        <div className="button-container">
          <Link to="https://discord.gg/wC37kY3qwH" className="join-link">
            <ButtonBG className="btn-bg"/>
            <span>comming soon</span>

          </Link>
        </div>
      </h1>
    </>
    
  </Layout>
)

export default IndexPage
