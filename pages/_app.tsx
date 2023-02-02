import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NhostClient, NhostProvider } from "@nhost/nextjs";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_NHOST_REGION,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <div className="h-full w-full">
        <Component {...pageProps} />
      </div>
    </NhostProvider>
  );
}
