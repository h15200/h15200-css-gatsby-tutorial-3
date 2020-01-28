import React, { Fragment } from "react"
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
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>World&apos;s best luxury homes</h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit maxime architecto qui autem.
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Trophy className={indexStyles.feature_icon} />
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>Only the best properties</h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              eveniet deserunt assumenda quam quos!
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Pin className={indexStyles.feature_icon} />
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>
              All homes in the best locations
            </h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Key className={indexStyles.feature_icon} />
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>New home in one week</h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non
              sint accusamus nam harum!
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Presentation className={indexStyles.feature_icon} />
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>Top 1% realtors</h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, non voluptates?
            </p>
          </div>

          <div className={indexStyles.feature}>
            <Lock className={indexStyles.feature_icon} />
            <h4 className={`${indexStyles.heading_4} ${indexStyles.heading_4___dark}`}>Secure payments on Nexter</h4>
            <p className={indexStyles.feature_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        <div className={indexStyles.story_pictures}>Story pictures</div>

        <div className={indexStyles.story_content}>Story content</div>

        <section className={indexStyles.homes}>Homes</section>

        <section className={indexStyles.gallery}>Gallery</section>

        <footer className={indexStyles.footer}>Footer</footer>
      </div>
    </Fragment>
  )
}

export default IndexPage
