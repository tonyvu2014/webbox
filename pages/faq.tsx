// Basic Imports
import { NextPage } from "next";

import {
    Box,
    Container,
    Heading,
    Link,
    List,
    ListItem,
    Text
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";

const Faq: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo title="Frequently Asked Questions" />

      <main>
        <Header />
        <BaseBox>
            <Container  maxW="container.md" m="auto" mt="4" centerContent>
                <Heading as="h1" mb="8">Frequently Asked Questions</Heading>
                <List>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">What is Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Webbox AI is an AI-powered no-code website generator that allows users to create stunning, professional websites in under an hour without any coding skills. 
                            </Text>  
                        </Box>  
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">How does Webbox AI work?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Webbox AI uses an easy-to-use interface to guide you through the website generation process. Simply provide some basic information about your site, select your design preferences, and Webbox AI will generate a fully functional website tailored to your needs.
                            Users have freedom to customise the content and UI as they wish.
                            Please see the guide on our <Link color='blue.500' href="/help">How it works</Link> page.
                            </Text>  
                        </Box>  
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">Who can use Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Anyone looking to create a professional website quickly and easily without any coding knowledge.    
                            Webbox AI is perfect for startup founders, small-and-medium business owners, creatives or hobbyists who want to create a personal or a search engine optimized customer-facing website.
                            </Text>  
                        </Box>  
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">What are the benefits of using Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            - Speed: Create a website in under an hour. <br/>
                            - Ease of Use: No coding skills required, almost zero learning curve. <br/>
                            - Cost-Effective: Creating and hosting websites with Webbox AI is very affordable. If you join as an early adopter, you will get first website free and enjoy a 50% discount on subsequent websites. Register interest <Link color="blue.500" href="/contact">here</Link>.<br/>
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">What kind of websites can I create with Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Webbox AI is perfect for non-technical founders and business owners who need to create professional company or product websites. 
                            This tool allows them to introduce their brand, attract more online users, and grow their digital presence without needing to invest significant time and effort in technical capabilities.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">How is Webbox AI different from no-code platforms like Bubble or Webflow?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            While Webbox AI is a no-code solution for creating websites, it leverages the power of AI to automate the process and minimize your learning curve. As a result, although it may lack the extensive customization capabilities needed to build complex web applications like Bubble or Webflow, Webbox AI is excellent for creating simpler websites in a much shorter time and with minimal effort.
                            Please see our <Link color="blue.500" href="/features">Comparison</Link> page for a detailed analysis.
                            </Text>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">Where is the website hosted?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Your generated website is securely hosted on our server. 
                            All server infrastructure was handled by us so you can focus on creating the best user experience for your customers.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">Can I use my own domain with Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Yes, you can easily connect your own domain to your Webbox AI website. 
                            The process involves a few simple steps and takes just a few minutes to complete.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">What happens if I need to make changes to my website after it&apos;s created?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Webbox AI makes it easy to update and manage your website even after it&apos;s live. 
                            Simply log in to your account and use the intuitive interface to make changes to your content and design as needed. 
                            This flexibility allows you to experiment with different copy and designs to optimize your site.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">Is there customer support available?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Using Webbox AI should be straightforward. However, when you need help, feel free to reach out to us at support@webboxai.com.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">Is Webbox AI really free for the first website?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Yes, as an early adopter, you can create your first website for free. 
                            Additionally, you will receive a 50% discount on any subsequent websites you create using Webbox AI.
                            Sign up with Webbox AI <Link color="blue.500" href="/contact">here</Link>.
                            </Text>  
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box my="2">
                            <Text as="b">What technologies are used for my website built with Webbox AI?</Text>
                        </Box>
                        <Box my="2">
                            <Text>
                            Your website is built with Next.js and hosted on Vercel, two proven technologies that offer numerous benefits: <br />
                            - Improved site performance: Next.js optimizes your website for speed and efficiency. <br/>
                            - SEO-Friendly: Server-side rendering in Next.js enhances SEO, helping your site rank higher in search engine results. <br />
                            - Security and maintainability. <br />
                            </Text>  
                        </Box>
                    </ListItem>
                </List>           
            </Container>
        </BaseBox>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Faq;
