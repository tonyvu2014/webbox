// Basic Imports
import React from "react";
import Head from "next/head";

// Types Imports
import { SeoType } from "@/common/types/components/base-seo";

const BaseSeo: React.FunctionComponent<SeoType> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {["Webbox AI", props.title].flat().filter(Boolean).join(" - ")}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Create stunning websites in under an hour with Webbox AI, the AI-powered no-code website generator. Perfect for businesses and creatives, Webbox makes professional website creation easy and fast. Sign up now to get your first website free and enjoy a 50% discount on subsequent sites. Revolutionize your online presence with Webbox AI." />
        <meta name="author" content="Tony Vu" />
        <meta name="author" content="tonyvu2014" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tony Vu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://github.com/tonyvu2014" />
        <meta name="twitter:creator" content="@tonyvu2014" />
        <meta
          name="twitter:image"
          content="https://github.com/tonyvu2014"
        />
        <meta property="og:site_name" content="Webbox - AI web generator" />
        <meta name="og:title" content="Webbox -  AI web generator" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/7567119?v=4"
        />
      </Head>
    </React.Fragment>
  );
};

export default BaseSeo;
