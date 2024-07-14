// Basic Imports
import { NextPage } from "next";

// Components Imports
import Header from "@/website/Header";
import Hero from "@/website/Hero";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo />

      <main>
        <Header />
        <Hero {...props} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        description: "Support us by becoming a stargazer! 🚀",
        stargazerTitle: "Repository Star",
        stargazerLink:
          "https://img.shields.io/github/stars/ayushsoni1010/spendify.svg?style=social&label=Star",
        href: "https://github.com/ayushsoni1010/spendify",
      },
      heroSection: {
        heading: "Create stunning websites in under an hour with Webbox AI",
        description:
          "Welcome to Webbox, the ultimate AI-powered no-code website generator. Whether you're a startup founder, business owner, creative professional, or hobbyist, Webbox empowers you to design and launch a professional, seo-friendly website in less than 60 minutes. With intuitive tools and intelligent design assistance, you can seamlessly transform your vision into a fully functional online presence without any coding skills. Experience the future of website creation with Webbox – fast, easy, and beautiful.",
        buttonText: "Get started",
      },
    },
  };
}

export default Home;
