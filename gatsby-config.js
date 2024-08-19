/**
 * @type {import('gatsby').GatsbyConfig}
 */
// const adapter = require("gatsby-adapter-netlify");

module.exports = {
    siteMetadata: {
        title: `WT的Gatsby教学站点`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // adapter: adapter({
    //     excludeDatastoreFromEngineFunction: false,
    // }),
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
    ],
};
