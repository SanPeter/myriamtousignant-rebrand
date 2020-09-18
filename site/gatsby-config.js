/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {},
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {},
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["700"],
          },
        ],
      },
    },
  ],
};
