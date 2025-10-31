import Head from "next/head";
import DigitalSolutionsPage from "./page";

export default function DigitalSolutions() {
  return (
    <>
      <Head>
        <title>NF Solutions | Digital Transformation Services | Cloud, AI & Data</title>
        <meta name="description" content="We offer expert digital engineering, cloud, data, and AI solutions to help enterprises build modern platforms, enhance customer experiences, and accelerate growth." />
        <meta property="og:title" content="NF Solutions | Digital Transformation Services | Cloud, AI & Data" />
        <meta property="og:description" content="We offer expert digital engineering, cloud, data, and AI solutions to help enterprises build modern platforms, enhance customer experiences, and accelerate growth." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <DigitalSolutionsPage />
    </>
  );
}