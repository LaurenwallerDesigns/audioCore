module.exports = {
  siteMetadata: {
    title: "audiocOre",
  },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
