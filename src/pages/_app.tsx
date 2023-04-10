import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
