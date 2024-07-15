// Basic Imports
import { NextPage } from "next";

import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Image,
    ListItem,
    OrderedList,
    Text
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";
import { useRouter } from "next/router";

const Help: NextPage = (props: any) => {
  const { push } = useRouter();

  const goToContact = () => {
    push('/contact')
  }

  return (
    <div>
      <BaseSeo title="How it works" />
      <main>
        <Header />
        <BaseBox>
            <Container  maxW="container.md" mt="8" centerContent>
                <Heading as="h1" mb="8">How Webbox AI works</Heading>
                <Box mb="4">
                    Webbox AI generates websites based on your text instructions and design preferences. Follow these simple steps.
                </Box>
                <OrderedList>
                    <ListItem mb="4">
                      <Text fontWeight="bold">Provide basic information about your website
                      </Text>
                    <Box mt="2">
                      <Image src="/assets/step-info.png" alt="info">
                      </Image>
                    </Box>
                    </ListItem>
                    <ListItem mb="4"><Text fontWeight="bold">Pick the pages that you want to generate</Text>
                    <Box mt="2">
                      <Image src="/assets/step-pages.png" alt="pages">
                      </Image>
                    </Box>
                    </ListItem>
                    <ListItem mb="4"><Text fontWeight="bold">Select a template that you want to use</Text>
                    <Box mt="2">
                      <Image src="/assets/step-template.png" alt="template">
                      </Image>
                    </Box>
                    </ListItem>
                    <ListItem mb="4"><Text fontWeight="bold">Select your design preferences</Text>
                    <Box mt="2">
                      <Image src="/assets/step-design.png" alt="design">
                      </Image>
                    </Box>
                    </ListItem>
                    <ListItem mb="4"><Text fontWeight="bold">View and change the website as you wish</Text>
                    <Box mt="2">
                      Webbox AI will automatically generate a modern and SEO-friendly website for you, including layout, design and all contents. You can easily customize various elements to suit your preferences, such as: <br/>
                      - The logo. <br/>
                      - The images or illustrations. <br/>
                      - Text copies on the website using text prompts. <br/>
                      - Page layout. <br/>
                      - Text font or color scheme. <br/>
                    </Box>
                    </ListItem> 
                    <ListItem mb="4"><Text fontWeight="bold">Connect to your domain</Text>
                    <Box mt="2">
                      Once you acquire your dream domain from a provider, follow few simple steps to link the domain to your newly created website.
                    </Box>
                    </ListItem>
                    <ListItem mb="4"><Text fontWeight="bold">Publish</Text>
                    <Box mt="2">
                      Congratulations! Your website is ready. Simply click the &quot;Publish&quot; button to showcase it to your potential customers.                    </Box>
                    </ListItem>      
                </OrderedList>           
            </Container>
        </BaseBox>
        <Box mt="8">
        <Center>
          <Button variant="solid" 
                  colorScheme="teal"
                  onClick={() => goToContact()}
                  p="6">
                    I&apos;m Interested
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

export default Help;
