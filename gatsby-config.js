/**
 * @type {import('gatsby').GatsbyConfig}
 */
// const adapter = require("gatsby-adapter-netlify");

module.exports = {
    siteMetadata: {
        title: `WT First Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // adapter: adapter({
    //     excludeDatastoreFromEngineFunction: false,
    // }),
    plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp"],
};
