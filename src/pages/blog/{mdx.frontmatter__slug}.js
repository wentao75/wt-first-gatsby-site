import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>发表于 {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>
                图片来源：{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            {children}
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "YYYY年MM月DD日")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

// console.log(props);
// {
//     "data": {
//       "allMdx": {
//         "nodes": [
//           {
//             "frontmatter": {
//               "title": "Another Post"
//             },
//             "id": "1666297c-3774-55d9-a61c-e502c670c929"
//           },
//           {
//             "frontmatter": {
//               "title": "My First Post"
//             },
//             "id": "88185826-1762-5353-a52e-fa6fbc40c9aa"
//           },
//           {
//             "frontmatter": {
//               "title": "Yet Another Post"
//             },
//             "id": "929ca69d-b5a3-5501-8148-7f9936b36f59"
//           }
//         ]
//       }
//     },
//   }
