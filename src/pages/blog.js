import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="我的博客">
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>发布于：{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY年MM月DD日")
                    title
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo title="我的博客" />;

export default BlogPage;
