// the config file posted on https://blog.alexdevero.com/website-gatsbyjs-postcss-pt1/ didn't work for me.
// below is the gatsby-config.js file with the changes I made in order to get it working on my end.
// also see gatsby-node.js for adding jquery after install

module.exports = {
    siteMetadata: {
        title: 'word', // Set the title for the website
        description: 'words', // Set the descript for the website
        author: 'person' // Set the author of the website
    },
    pathPrefix: '/', // Adding path for static files
    plugins: [
        'gatsby-plugin-react-helmet', // Implements helmet plugin
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: `${__dirname}/src/images` // path to dir with image assets
            }
        },
        {
            resolve: `gatsby-plugin-postcss`, // Implements PostCSS
            options: {
                postCssPlugins: [
                        require('postcss-import')(), // Add support for sass-like '@import'
                        require('postcss-extend')(), // Add support for sass-like '@extend'
                        require('postcss-nesting')(), // Add support for sass-like nesting of rules
                        require('postcss-pxtorem')({
                        mediaQuery: false, // Ignore media queries
                        minPixelValue: 0, // Minimal pixel value that will be processed
                        propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
                        replace: true, // Replace pixels with rems
                        rootValue: 16, // Root font-size
                        selectorBlackList: ['html'], // Ignore pixels used for html
                        unitPrecision: 4 // Round rem units to 4 digits
                    }),
                        require('postcss-preset-env')({
                        stage: 3 // More info about stages: https://cssdb.org/#staging-process
                    }),
                        require('cssnano')() // Minify CSS
                    ]
            }
        },
        'gatsby-transformer-sharp', // Allows to process your images - resize, crop and create responsive images
        'gatsby-plugin-sharp', // Adds several image processing functions
        {
            resolve: 'gatsby-plugin-manifest', // Generates manifest.webmanifest to make your website a progressive web app
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline'
    ]
}
