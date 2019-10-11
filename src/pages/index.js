import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import SocketExample from "../components/SocketExample";
import GetThis from "../components/GetThis";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-pink-bg">
        <Hero />
      </div>
      <div className="is-grey is-white-bg">
        <GetThis flag="watermelon" />
      </div>
      <div className="is-white is-light-grey-bg">
        <SocketExample />
      </div>
    </Layout>
  );
}
