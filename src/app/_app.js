import React from "react";
import Layout from "@/components/Layout";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
