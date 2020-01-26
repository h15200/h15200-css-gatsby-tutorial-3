import { Helmet } from "react-helmet"
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import favicon from "../../static/favicon.ico"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Ninito:300,300i" rel="stylesheet" />
      <meta name="author" content="Hideaki Aomori" />
      <meta name="description" content="demo site using css grid" />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
