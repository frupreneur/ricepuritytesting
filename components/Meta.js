import React from "react";
import Head from "next/head";

export default function Meta({
  title = `Rice Purity Test - Free Innocence Test ${new Date().getFullYear()}`,
  description = "How Pure Are You? Take this 100-Question Rice Purity Test / Innocence Test to Find Out! Get Ready for Some Surprises",
  url = "https://www.ricepuritytesting.com",
  index = "index, follow",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://www.ricepuritytesting.com/assets/images/rice-purity-test.png" />
      <meta property="og:site_name" content="Rice Purity Testing" />
      <meta name="robots" content={index} />
    </Head>
  );
}
