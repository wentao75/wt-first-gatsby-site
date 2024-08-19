import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="我的博客">
            <ul>
                {data.allFile.nodes.map((node) => (
                    <li key={node.name}>{node.name}</li>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export const Head = () => <Seo title="我的博客" />;

export default BlogPage;
