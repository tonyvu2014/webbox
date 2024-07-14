// Basic Imports
import { NextPage } from "next";

import {
    Box,
    Container,
    Heading,
    ListItem,
    OrderedList,
    Text
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";

const Cases: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo title="Use Cases" />

      <main>
        <Header />
        <BaseBox>
            <Container  maxW="container.md" mt="4" centerContent>
                <Heading as="h1" mb="8">Use Cases</Heading> 
                <OrderedList>
                    <ListItem mb="4">
                        <Text fontWeight="bold">Company websites for small business owners:</Text>
                        <Box mt="2">
                        John Davis, a small business owner, dreamed of opening her own bakery but lacked the technical skills to create a professional website. 
                        She discovered Webbox AI which allowed her to build a stunning website for her bakery, &ldquo;Sweet Delights&rdquo; in under an hour. The platform&apos;s user-friendly interface and customizable templates made the process easy and stress-free. 
                        Sarah&apos;s new website quickly attracted customers, enhancing her business&apos;s online presence and success. Webbox AI enabled her to focus on her passion for baking while effortlessly managing her website.
                        </Box>
                    </ListItem>
                    <ListItem mb="4">
                        <Text fontWeight="bold">Product launch websites for startup founders:</Text>
                        <Box mt="2">
                        Emily Chen, a non-technical startup founder, wanted to create a professional launch page for her smart wearable device, FitPulse. 
                        With no coding skills, she turned to Webbox AI. With less than $50 and within an hour, she created an engaging and informative launch page featuring images, a product description, user testimonials, a newsletter sign-up form, and a demo video. 
                        The launch page quickly attracted interest from potential customers and investors, enabling Emily to gather valuable user feedback and build an early audience. 
                        Webbox AI allowed her to focus on refining her product and engaging with her audience, rather than worrying about the technical aspects of website creation.      
                        </Box>
                    </ListItem>
                    <ListItem mb="4">
                        <Text fontWeight="bold">Landing pages for marketing campaigns:</Text>
                        <Box mt="2">
                        Sarah Thompson, a marketing manager at a boutique coffee company, needed a landing page for a new line of premium coffee blends. 
                        Using Webbox AI, he quickly created a professional, engaging landing page. 
                        The platform&apos;s ease of use and efficient tools helped John drive traffic, generate leads, and boost sales, allowing him to focus on his marketing campaign rather than technical details. 
                        Webbox AI proved to be a powerful solution for creating effective landing pages swiftly and effortlessly.      
                        </Box>
                    </ListItem>
                    <ListItem mb="4">
                        <Text fontWeight="bold">Event pages for community groups or non-profit organizations:</Text>
                        <Box mt="2">
                        Mike Parker, working for an environmental non-profit, needed an effective landing page for a river clean-up charity event. 
                        He turned to Webbox AI and, within a short period of time, created a professional page with event specifics, images, and a volunteer registration form. 
                        The platform&apos;s simplicity enabled Mike to concentrate on mobilizing the community, leading to higher engagement and contributions. 
                        Webbox AI allowed Mike to swiftly and effortlessly craft a successful event page, demonstrating its usefulness for non-profits and community initiatives.    
                        </Box>
                    </ListItem>
                    <ListItem mb="4">
                        <Text fontWeight="bold">Personal branding websites for freelancers or professionals:</Text>
                        <Box mt="2">
                        Mark Evans, an aspiring freelancer, aimed to showcase his professional work to potential clients through a website. 
                        Lacking coding expertise, he faced uncertainty about where to begin. Discovering Webbox AI came as a relief—he was thrilled to find a tool that could easily create a personal portfolio site without requiring significant time or financial investment.  
                        </Box>
                    </ListItem>
                </OrderedList>        
            </Container>
        </BaseBox>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Cases;
