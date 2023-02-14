import React from "react";
import Head from "next/head";

export default function Meta({
  title = "Love Language Test - Take free love language quiz",
  description = "Find Out What Makes Your Heart Sing: Take this free love language test to discover your primary love language, what it means, and how you can use it to better connect with someone you love.",
  url = "https://www.lovelanguagestest.com",
  index = "index, follow"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="robots" content={index} />
    </Head>
  );
}
