/**
 * Import to project with using
 * npm install --save jquery
 * then add this to contact.js
 * import $ from 'jquery/dist/jquery.slim.min.js'
 */

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}
