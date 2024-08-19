import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Aboutpage = () => {
    return (
        <Layout pageTitle="关于">
            <p>您好！我是这个站点的创建者，我使用Gatsby创建了它。</p>
        </Layout>
    );
};

export const Head = () => <Seo title="关于" />;

export default Aboutpage;
