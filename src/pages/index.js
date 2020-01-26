import React, { Fragment } from 'react'

import Head from '../components/helmetHead'

// this connects main.scss to the gatsby app
import indexStyles from '../styles/Modules/index.module.scss'

const IndexPage = () => {
  return (
    <Fragment>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <div className={indexStyles.sidebar}>
          Sidebar
        </div>

        <header className={indexStyles.header}>
          Header
        </header>

        <div className={indexStyles.realtors}>
          Top 3 realtors
        </div>

        <section className={indexStyles.features}>
          Features
        </section>

        <div className={indexStyles.story_pictures}>
          Story pictures
        </div>

        <div className={indexStyles.story_content}>
          Story content
        </div>

        <section className={indexStyles.homes}>
          Homes
        </section>

        <section className={indexStyles.gallery}>
          Gallery
        </section>

        <footer className={indexStyles.footer}>
          Footer
        </footer>
      </div>

    </Fragment>
  )
}


export default IndexPage
