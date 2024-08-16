import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="首页">
            <p>我正在Gatsby教学学习</p>
        </Layout>
    );
};

export const Head = () => <title>首页</title>;

export default IndexPage;
