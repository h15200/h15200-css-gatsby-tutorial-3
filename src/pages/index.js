import React, { Fragment } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Globe from "../images/global.svg"
import Trophy from "../images/trophy.svg"
import Pin from "../images/map-pin.svg"
import Key from "../images/key.svg"
import Presentation from "../images/presentation.svg"
import Lock from "../images/lock.svg"

import Head from "../components/helmetHead"

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
      storyOne: file(relativePath: { eq: "story-1.jpeg" }) {
        childImageSharp {
          fluid (maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
      storyTwo: file(relativePath: { eq: "story-2.jpeg"}) {
        childImageSharp {
          fluid (maxWidth:1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "back.jpg"}) {
        childImageSharp {
          fluid (maxWidth:1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <div className={indexStyles.sidebar}>Sidebar</div>

        <header className={indexStyles.header}>Header</header>

        <div className={indexStyles.realtors}>Top 3 realtors</div>

        <section className={indexStyles.features}>
          <div className={indexStyles.feature}>
            <Globe className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              World&apos;s best luxury homes
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit maxime architecto qui autem.
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Trophy className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              Only the best properties
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              eveniet deserunt assumenda quam quos!
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Pin className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              All homes in the best locations
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Key className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              New home in one week
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non
              sint accusamus nam harum!
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Presentation className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              Top 1% realtors
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, non voluptates?
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Lock className={indexStyles.feature_icon} />
            <h4
              className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}
            >
              Secure payments on Nexter
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        <div className={indexStyles.story_pictures}>
        <div className={indexStyles.story_backgroundContainer}><Img className={indexStyles.story_background} fluid={data.background.childImageSharp.fluid} alt="A meadow"/></div>
        <div className={indexStyles.story_img1Container}><Img className={indexStyles.story_img1} fluid={data.storyOne.childImageSharp.fluid} alt="Couple with new house"/></div>
        <div className={indexStyles.story_img2Container}><Img className={indexStyles.story_img2} fluid={data.storyTwo.childImageSharp.fluid} alt="New house"/></div>
        </div>

        <div className={indexStyles.story_content}>
          <h3 className={`${indexStyles.heading_3} ${indexStyles.u_mb_small}`}>Happy Customers</h3>
          <h2 className={`${indexStyles.heading_2} ${indexStyles.heading_2___dark} ${indexStyles.u_mb_medium}`}>
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className={indexStyles.story_text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            deserunt, itaque fuga possimus dolores natus suscipit sit!
          </p>
          <button className={`${indexStyles.btn}`}>Find your own home</button>
        </div>

        <section className={indexStyles.homes}>Homes</section>

        <section className={indexStyles.gallery}>Gallery</section>

        <footer className={indexStyles.footer}>Footer</footer>
      </div>
    </Fragment>
  )
}

export default IndexPage
