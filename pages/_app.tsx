import React, { ReactNode } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/style.css";

interface MyAppProps extends AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
