// Basic Imports
import { NextPage } from "next";
import { useRouter } from "next/router";

// Components Imports
import Header from "@/website/Header";
import Hero from "@/website/Hero";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import BaseBox from "@/modules/components/BaseBox";

//Icons
import { CiLight } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { FaPiggyBank } from "react-icons/fa";

const Home: NextPage = (props: any) => {
  const { push } = useRouter();

  const goToContact = () => {
    push('/contact')
  };

  return (
    <div>
      <BaseSeo title="Generate websites in under 1 hour"/>

      <main>
        <Header />
        <Hero {...props} />
        <BaseBox position="relative">
          <SimpleGrid spacing={4} columns={{sm:1, md: 3}}>
            <Card variant={'elevated'} size='md' align="center">
              <CardHeader>
                <Heading as="h2" fontSize={{
                  base: "2xl",
                  lg: "2xl",
                  md: "xl",
                  sm: "lg",
                  xs: "md",
                }}
                fontWeight="600">
                  Ease of Use
                </Heading>
              </CardHeader>
              <CardBody>
                Webbox AI is designed for non-technical users, making it incredibly easy to create a professional-looking website. With intuitive text instructions and pre-defined templates, users can generate a fully functional website without any coding knowledge or technical skills. The streamlined process ensures that even beginners can build a website with minimal effort.
              </CardBody>
              <CardFooter>
                <CiLight size={64} color='blue.500' />
              </CardFooter>
            </Card> 
            <Card variant={'elevated'} size='md' align="center">
              <CardHeader>
                <Heading as="h2" fontSize={{
                    base: "2xl",
                    lg: "2xl",
                    md: "xl",
                    sm: "lg",
                    xs: "md",
                }}
                fontWeight="600">
                  Speed and Efficiency
                </Heading>
              </CardHeader>
              <CardBody>
                Webbox AI excels in quickly setting up and deploying websites. By leveraging AI to automate the design and layout process, users can have their website up and running in a fraction of the time it would take with traditional website builders. This makes it an ideal choice for individuals and small businesses that need a fast and effective web presence.
              </CardBody>
              <CardFooter>
                <IoIosFlash size={64} color='blue.500' />
              </CardFooter>
            </Card> 
            <Card variant={'elevated'} size='md' align="center">
              <CardHeader>
                <Heading as="h2" 
                  fontSize={{
                    base: "2xl",
                    lg: "2xl",
                    md: "xl",
                    sm: "lg",
                    xs: "md",
                  }}
                  fontWeight="600">
                  Cost-Effective Solution
                </Heading>
              </CardHeader>
              <CardBody>
                With its focus on simplicity and pre-defined templates, Webbox AI provides a cost-effective way to create a professional website. Users can avoid the expenses associated with hiring web developers or designers, making it a budget-friendly option for startups, freelancers, and small businesses looking to establish an online presence without significant financial investment.
              </CardBody>
              <CardFooter>
                <FaPiggyBank size={64} color='blue.500' />
              </CardFooter>
            </Card>
          </SimpleGrid>
        </BaseBox>
        <Box mt="8">
        <Center>
          <Button variant="solid" 
                  colorScheme="teal"
                  p="6"
                  onClick={() => goToContact()}>
            Sign Me Up
          </Button>
        </Center>
        </Box>
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
