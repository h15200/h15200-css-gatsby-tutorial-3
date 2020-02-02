import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Globe from "../images/global.svg"
import Trophy from "../images/trophy.svg"
import Pin from "../images/map-pin.svg"
import Key from "../images/key.svg"
import Presentation from "../images/presentation.svg"
import Lock from "../images/lock.svg"
import Heart from "../images/heart.svg"
import Profile from "../images/profile-male.svg"
import Expand from "../images/expand.svg"

import Head from "../components/helmetHead"

// this connects main.scss to the gatsby app
import indexStyles from "../styles/Modules/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      storyOne: file(relativePath: { eq: "story-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storyTwo: file(relativePath: { eq: "story-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "back.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseOne: file(relativePath: { eq: "house-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseTwo: file(relativePath: { eq: "house-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseThree: file(relativePath: { eq: "house-3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseFour: file(relativePath: { eq: "house-4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseFive: file(relativePath: { eq: "house-5.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseSix: file(relativePath: { eq: "house-6.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_1: file(relativePath: { eq: "gal-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_2: file(relativePath: { eq: "gal-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_3: file(relativePath: { eq: "gal-3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_4: file(relativePath: { eq: "gal-4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_5: file(relativePath: { eq: "gal-5.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_6: file(relativePath: { eq: "gal-6.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_7: file(relativePath: { eq: "gal-7.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_8: file(relativePath: { eq: "gal-8.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_9: file(relativePath: { eq: "gal-9.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_10: file(relativePath: { eq: "gal-10.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_11: file(relativePath: { eq: "gal-11.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_12: file(relativePath: { eq: "gal-12.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_13: file(relativePath: { eq: "gal-13.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gal_14: file(relativePath: { eq: "gal-14.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid (maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoOne: file(relativePath: { eq: "logo-bbc.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoTwo: file(relativePath: { eq: "logo-bi.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoThree: file(relativePath: { eq: "logo-forbes.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoFour: file(relativePath: { eq: "logo-techcrunch.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      realtorOne: file(relativePath: { eq: "realtor-1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      realtorTwo: file(relativePath: { eq: "realtor-2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      realtorThree: file(relativePath: { eq: "realtor-3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
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
        <div className={indexStyles.sidebar}>
          <button className={indexStyles.nav_btn}></button>
        </div>

        <header className={indexStyles.header}>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            alt="hero"
            className={indexStyles.header_hero}
            style={{ position: "absolute" }}
          />
          <div className={indexStyles.header_logoContainer}>
            <Img
              fluid={data.headerLogo.childImageSharp.fluid}
              alt="logo"
              className={indexStyles.header_logoImg}
            />
          </div>
          <h3 className={`${indexStyles.heading_3}`}>Your own home:</h3>
          <h1 className={indexStyles.heading_1}>
            The ultimate personal freedom
          </h1>
          <button className={`${indexStyles.btn} ${indexStyles.header_btn}`}>
            View our properties
          </button>
          <div className={indexStyles.header_seenOn___text}>As seen on</div>
          <div className={indexStyles.header_seenOn___logos}>
            <Img
              fluid={data.logoOne.childImageSharp.fluid}
              alt="logo"
              className={indexStyles.header_seenOn___logos___one}
            />
            <Img
              fluid={data.logoTwo.childImageSharp.fluid}
              alt="logo"
              className={indexStyles.header_seenOn___logos___two}
            />
            <Img
              fluid={data.logoThree.childImageSharp.fluid}
              alt="logo"
              className={indexStyles.header_seenOn___logos___three}
            />
            <Img
              fluid={data.logoFour.childImageSharp.fluid}
              alt="logo"
              className={indexStyles.header_seenOn___logos___four}
            />
          </div>
        </header>

        <div className={indexStyles.realtors}>
          <h3 className={indexStyles.heading_3}>Top 3 Realtors</h3>
          <div className={indexStyles.realtors_list}>
            <Img
              fluid={data.realtorOne.childImageSharp.fluid}
              alt="Realtor 1"
              className={indexStyles.realtors_img}
            />
            <div className={indexStyles.realtors_detail}>
              <h4
                className={`${indexStyles.heading_4} ${indexStyles.heading_4___light}`}
              >
                Erik Feinman
              </h4>
              <p className={indexStyles.realtors_sold}>245 Houses Sold</p>
            </div>

            <Img
              fluid={data.realtorTwo.childImageSharp.fluid}
              alt="Realtor 2"
              className={indexStyles.realtors_img}
            />
            <div className={indexStyles.realtors_detail}>
              <h4
                className={`${indexStyles.heading_4} ${indexStyles.heading_4___light}`}
              >
                Kim Brown
              </h4>
              <p className={indexStyles.realtors_sold}>235 Houses Sold</p>
            </div>

            <Img
              fluid={data.realtorThree.childImageSharp.fluid}
              alt="Realtor 3"
              className={indexStyles.realtors_img}
            />
            <div className={indexStyles.realtors_detail}>
              <h4
                className={`${indexStyles.heading_4} ${indexStyles.heading_4___light}`}
              >
                Toby Ramsey
              </h4>
              <p className={indexStyles.realtors_sold}>198 Houses Sold</p>
            </div>
          </div>
        </div>

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
          <Img
            className={indexStyles.story_background}
            fluid={data.background.childImageSharp.fluid}
            alt="A meadow"
          />
          <Img
            className={indexStyles.story_img1}
            fluid={data.storyOne.childImageSharp.fluid}
            alt="Couple with new house"
          />
          <Img
            className={indexStyles.story_img2}
            fluid={data.storyTwo.childImageSharp.fluid}
            alt="New house"
          />
        </div>

        <div className={indexStyles.story_content}>
          <h3 className={`${indexStyles.heading_3} ${indexStyles.u_mb_small}`}>
            Happy Customers
          </h3>
          <h2
            className={`${indexStyles.heading_2} ${indexStyles.heading_2___dark} ${indexStyles.u_mb_medium}`}
          >
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className={indexStyles.story_text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            deserunt, itaque fuga possimus dolores natus suscipit sit!
          </p>
          <button className={`${indexStyles.btn}`}>Find your own home</button>
        </div>

        <section className={indexStyles.homes}>
          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseOne.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Beautiful Family House</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>USA</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>5 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$1,200,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>

          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseTwo.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Modern Glass Villa</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>Canada</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>6 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                460 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$2,750,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>

          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseThree.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Cozy country house</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>UK</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>4 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$850,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>

          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseFour.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Large Rustic Villa</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>Portugal</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>6 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$1,950,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>

          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseFive.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Majestic Palace House</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>Germany</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>18 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$9,500,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>

          <div className={indexStyles.home}>
            <Img
              className={indexStyles.home_img}
              fluid={data.houseSix.childImageSharp.fluid}
              alt="home"
            />
            <Heart className={indexStyles.home_like} />
            <h5 className={indexStyles.home_name}>Modern Family Apartment</h5>
            <div className={indexStyles.home_location}>
              <Pin className={indexStyles.home_location___icon} />
              <p className={indexStyles.home_location___text}>Italy</p>
            </div>
            <div className={indexStyles.home_rooms}>
              <Profile className={indexStyles.home_rooms___icon} />
              <p className={indexStyles.home_rooms___text}>3 rooms</p>
            </div>
            <div className={indexStyles.home_area}>
              <Expand className={indexStyles.home_area___icon} />
              <p className={indexStyles.home_area___text}>
                180 m<sup>2</sup>
              </p>
            </div>
            <div className={indexStyles.home_price}>
              <Key className={indexStyles.home_price___icon} />
              <p className={indexStyles.home_price___text}>$600,000</p>
            </div>
            <button className={`${indexStyles.btn} ${indexStyles.btn___home}`}>
              Contact realtor
            </button>
          </div>
        </section>

        <section className={indexStyles.gallery}>
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___1}`}
            fluid={data.gal_1.childImageSharp.fluid}
            alt="gallery image-1"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___2}`}
            fluid={data.gal_2.childImageSharp.fluid}
            alt="gallery image-2"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___3}`}
            fluid={data.gal_3.childImageSharp.fluid}
            alt="gallery image-3"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___4}`}
            fluid={data.gal_4.childImageSharp.fluid}
            alt="gallery image-4"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___5}`}
            fluid={data.gal_5.childImageSharp.fluid}
            alt="gallery image-5"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___6}`}
            fluid={data.gal_6.childImageSharp.fluid}
            alt="gallery image-6"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___7}`}
            fluid={data.gal_7.childImageSharp.fluid}
            alt="gallery image-7"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___8}`}
            fluid={data.gal_8.childImageSharp.fluid}
            alt="gallery image-8"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___9}`}
            fluid={data.gal_9.childImageSharp.fluid}
            alt="gallery image-9"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___10}`}
            fluid={data.gal_10.childImageSharp.fluid}
            alt="gallery image-10"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___11}`}
            fluid={data.gal_11.childImageSharp.fluid}
            alt="gallery image-11"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___12}`}
            fluid={data.gal_12.childImageSharp.fluid}
            alt="gallery image-12"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___13}`}
            fluid={data.gal_13.childImageSharp.fluid}
            alt="gallery image-13"
          />
          <Img
            className={`${indexStyles.gallery_image} ${indexStyles.gallery_image___14}`}
            fluid={data.gal_14.childImageSharp.fluid}
            alt="gallery image-14"
          />
        </section>

        <footer className={indexStyles.footer}>
          <ul className={indexStyles.nav}>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Find your dream home
              </a>
            </li>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Request proposal
              </a>
            </li>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Download home planner
              </a>
            </li>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Contact us
              </a>
            </li>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Submit your property
              </a>
            </li>
            <li className={indexStyles.nav_item}>
              <a href="#" className={indexStyles.nav_link}>
                Come work with us!
              </a>
            </li>
          </ul>
          <p className={indexStyles.copyright}>&copy; Copyright 2020</p>
        </footer>
      </div>
    </Fragment>
  )
}

export default IndexPage
