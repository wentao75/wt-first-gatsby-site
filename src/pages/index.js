import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout pageTitle="首页">
            <p>我正在Gatsby教学学习</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/E1oMV3QVgAIr1NT.jpeg"
            />
        </Layout>
    );
};

export const Head = () => <Seo title="首页" />;

export default IndexPage;
