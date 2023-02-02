import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NhostClient, NhostProvider } from "@nhost/nextjs";
import { useMemo } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const nhost = useMemo(
    () =>
      new NhostClient({
        subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        region: process.env.NEXT_PUBLIC_NHOST_REGION,
      }),
    []
  );

  return (
    <NhostProvider nhost={nhost}>
      <Component {...pageProps} />
    </NhostProvider>
  );
};

export default App;
