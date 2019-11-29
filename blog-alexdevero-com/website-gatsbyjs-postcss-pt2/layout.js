// Updated layout.js for https://blog.alexdevero.com/website-gatsbyjs-postcss-pt2/

// Import dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
    StaticQuery,
    graphql
} from 'gatsby'

// Import Footer component
import Footer from './footer'

// Import Header component
import Header from './header'

import '../styles/styles.css'

// Layout component
const Layout = ({
    children
}) => ( <
    StaticQuery query = {
        graphql `
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render = {
        data => ( <
            >
            <
            Helmet title = {
                data.site.siteMetadata.title
            }
            meta = {
                [
                    {
                        name: 'description',
                        content: 'Your website built with GatsbyJS.'
                    }
          ]
            } >
            <
            html lang = "en" / >

            <
            link rel = "stylesheet"
            href = "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity = "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin = "anonymous" /
            >
            <
            /Helmet> <
            head >
            <
            script src = "https://code.jquery.com/jquery-3.3.1.min.js"
            integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossOrigin = "anonymous" /
            >
            <
            /head> <
            div className = "page-wrapper" >
            <
            Header siteTitle = {
                data.site.siteMetadata.title
            }
            />

            <
            div className = "page-content" >
            <
            div className = "container" > {
                children
            } < /div> <
            /div>

            <
            Footer / >
            <
            /div> <
            />
        )
    }
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
