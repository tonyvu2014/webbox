// Basic Imports
import { NextPage } from "next";

import {
    Box,
    Container,
    Heading,
    Table,
    TableCaption,
    Thead,
    Th,
    Tr,
    Tbody,
    Td,
    Tfoot,
    Center
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";

const Features: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo title="Comparison" />
      <main>
        <Header />
        <BaseBox>
            <Container  maxW="container.md" m="auto" mt="4" centerContent>
                <Heading as="h1" mb="8">How are Webbox AI different from Bubble.io</Heading>
                <Box mb="4">
                Webbox AI is best for users who need a quick, easy, and professional-looking website without the need for technical skills or complex functionality. It excels in simplicity and speed. <br/><br/>

                Bubble is suited for users who need to create complex web applications with dynamic content, custom workflows, and advanced features. It offers powerful no-code development capabilities and extensive customization, but with a steeper learning curve and longer development time. <br/><br/>

                Choosing between Webbox AI and Bubble depends on your specific needs, technical skills, and the complexity of the website or application you want to build.                
                </Box> 
                <Box>
                  <Table className="table-style" size="md" variant='striped' colorScheme='blue'>
                    <TableCaption>Webbox AI vs Bubble.io</TableCaption>
                    <Thead>
                      <Tr>
                        <Th className='td-label-style'></Th>
                        <Th className='td-value-style'><Center>Webbox</Center></Th>
                        <Th className='td-value-style'><Center>Bubble</Center></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td className='td-label-style'>Methodology</Td>
                        <Td className='td-value-style'>Generate website with pre-defined templates and text prompts using AI</Td>
                        <Td className='td-value-style'>Build website with pre-defined templates and drag-and-drop interface</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'>Learning Curve</Td>
                        <Td className='td-value-style'>Easy</Td>
                        <Td className='td-value-style'>Hard</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'>Time to build</Td>
                        <Td className='td-value-style'>Hours to days</Td>
                        <Td className='td-value-style'>Days to weeks</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'>Cost per month</Td>
                        <Td className='td-value-style'>Less than $10</Td>
                        <Td className='td-value-style'>$30 or more</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'>Customization</Td>
                        <Td className='td-value-style'>Possible but limited</Td>
                        <Td className='td-value-style'>More flexible</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'>Use cases</Td>
                        <Td className='td-value-style'>Ideal for individuals and small businesses who need a quick, cost-effective and straightforward way to create a professional-looking website without any technical skills.</Td>
                        <Td className='td-value-style'>Suitable for users who need to create more complex, dynamic websites and web applications, including developers, and businesses with specific needs.</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>       
            </Container>
        </BaseBox>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Features;
