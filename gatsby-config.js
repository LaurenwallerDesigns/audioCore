module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "A-dLmPw5b_M43fGW_JV5q3v-kDlfP0-lCvxlABnfVCU",
        spaceId: "d1qmw451eyyq",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }) => {
          const name = node.sourceInstanceName
          if (name === `locations`) {
            return `Location`
          }
          return name
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
          path: "./locations",
          name: "locations",
      },
      __key: "locations",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
