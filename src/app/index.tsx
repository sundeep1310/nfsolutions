import Head from "next/head";
import Homepage from "./page";

export default function Home() {
  return (
    <>
      <Head>
        <title>NF Solutions | Global EPC Technical and Commercial Advisory</title>
        <meta name="description" content="NF Solutions: Expert technical and commercial advisory for the global EPC market. We drive international growth for clients in Oil & Gas, Power, and Renewables." />
        <meta property="og:title" content="NF Solutions | Global EPC Technical and Commercial Advisory" />
        <meta property="og:description" content="NF Solutions: Expert technical and commercial advisory for the global EPC market. We drive international growth for clients in Oil & Gas, Power, and Renewables." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Homepage />
    </>
  );
}