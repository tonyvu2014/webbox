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
    Center,
    Text,
    Button
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";
import { useRouter } from "next/router";

const Features: NextPage = (props: any) => {
  const { push } = useRouter();

  const goToContact = () => {
    push('/contact')
  }

  return (
    <div>
      <BaseSeo title="Comparison" />
      <main>
        <Header />
        <BaseBox>
            <Container  maxW="container.md" mt="8" centerContent>
                <Heading as="h1" mb="8">How are Webbox AI different from Bubble.io and Webflow</Heading>
                <Box mb="4">
                <strong>Webbox AI</strong> is best for users who need a quick, easy, and professional-looking website without the need for technical skills or complex functionality. It excels in simplicity and speed. <br/><br/>

                <strong>Bubble</strong> is suited for users who need to create complex web applications with dynamic content, custom workflows, and advanced features. It offers powerful no-code development capabilities and extensive customization, but with a steeper learning curve and longer development time. <br/><br/>

                <strong>Webflow</strong> is designed for users who need a high level of control over their website&apos;s design and functionality. It&apos;s best suited for designers, developers, and businesses that require custom, professional-grade websites. Webflow offers extensive customization options, advanced design tools, and built-in features for responsive design, CMS, and e-commerce. It has a steeper learning curve and longer development time compared to Webbox AI.<br/><br/>

                Choosing between Webbox AI, Webflow and Bubble depends on your specific needs, technical skills, and the complexity of the website or application you want to build.                
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
                        <Td className='td-label-style'><Text as='b'>Methodology</Text></Td>
                        <Td className='td-value-style'>Generate website with pre-defined templates and text prompts using AI</Td>
                        <Td className='td-value-style'>Build website with pre-defined templates and drag-and-drop interface</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'><Text as='b'>Learning Curve</Text></Td>
                        <Td className='td-value-style'>Easy</Td>
                        <Td className='td-value-style'>Medium to hard</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'><Text as='b'>Time to build</Text></Td>
                        <Td className='td-value-style'>Hours to days</Td>
                        <Td className='td-value-style'>Days to weeks</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'><Text as='b'>Cost per month</Text></Td>
                        <Td className='td-value-style'>Less than $10</Td>
                        <Td className='td-value-style'>$30 or more</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'><Text as='b'>Customization</Text></Td>
                        <Td className='td-value-style'>Customizable to a limited extend</Td>
                        <Td className='td-value-style'>More flexible</Td>
                      </Tr>
                      <Tr>
                        <Td className='td-label-style'><Text as='b'>Use cases</Text></Td>
                        <Td className='td-value-style'>Ideal for individuals and small businesses who need a quick, straightforward and cost-effective way to create a professional-looking website without any technical skills.</Td>
                        <Td className='td-value-style'>Suitable for users who need to create more complex, dynamic websites and web applications, including developers, and businesses with specific needs.</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>       
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

export default Features;
