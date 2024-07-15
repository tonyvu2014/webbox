// Basic Imports
import { NextPage } from "next";
import { useRouter } from 'next/navigation';

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Container,
    Divider,
    Heading,
    SimpleGrid,
    Text
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";

const Pricing: NextPage = (props: any) => {
  const { push } = useRouter();

  const goToContact = () => {
    push('/contact')
  }

  return (
    <div>
      <BaseSeo title="Pricing" />

      <main>
        <Header />
        <BaseBox>
            <Container maxW="container.md" mt="8" centerContent>
                <Center><Heading as="h1" mb="8">Pricing</Heading></Center> 
                <SimpleGrid spacing={4} columns={{sm: 1, md: 3}}>
                    <Card variant={'elevated'} size='md' align="center">
                        <CardHeader>
                            <Heading size="md">Explorer</Heading>
                            <br/>
                            <Center><Text fontSize={'lg'}>Free</Text></Center>
                        </CardHeader>
                        <CardBody>
                            <Box mb='2'>
                                1 AI-generated website
                            </Box>
                            <Box mb='2'>
                                Pick from 3 site templates
                            </Box>
                            <Box mb='2'>
                                Unlimited customization of design elements
                            </Box>
                            <Box mb='2'>
                                10 attempts to rewrite contents using AI
                            </Box>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Box w='100%' p={2} textAlign={'center'}>
                                <Text fontSize={'sm'} mb='2'>
                                    Explore the power of AI website generator
                                </Text>
                                <Button type="button"
                                        variant="solid"
                                        colorScheme="blue"
                                        onClick={() => goToContact()}>
                                    Register Interest
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card variant={'filled'} size='md' align="center">
                        <CardHeader>
                            <Center><Heading size="md">Starter</Heading></Center>
                            <br/>   
                            <Center><Text fontSize={'lg'}>$9/month</Text></Center>                      
                        </CardHeader>
                        <CardBody>
                            <Box mb='2'>
                                1 AI-generated website
                            </Box>
                            <Box mb='2'>
                                Pick from all site templates
                            </Box>
                            <Box mb='2'>
                                Unlimited customization of design elements
                            </Box>
                            <Box mb='2'>
                                Unlimited attempts to rewrite contents using AI
                            </Box>
                            <Box mb='2'>
                                Site hosting with SSL
                            </Box>
                            <Box mb='2'>
                                Custom domain
                            </Box>
                            <Box mb='2'>
                                SEO optimization
                            </Box>
                            <Box mb='2'>
                                Web traffic analytics
                            </Box>
                            <Box mb='2'>
                                Form data submission dashboard
                            </Box>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Box w='100%' p={2} textAlign={'center'}>
                                <Text fontSize={'sm'} mb='2'>Register Interest now to get 50% discount</Text>
                                <Button type="button"
                                        variant="solid"
                                        colorScheme="blue"
                                        onClick={() => goToContact()}>
                                    Register Interest
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card variant={'elevated'} size='md' align='center'>
                        <CardHeader>
                            <Center><Heading size="md">Pro</Heading></Center>
                            <br/>   
                            <Text fontSize={'lg'}>$29/month</Text>                                               
                        </CardHeader>
                        <CardBody>
                            <Box mb='2'>
                                5 AI-generated websites
                            </Box>
                            <Box mb='2'>
                                Pick from all site templates
                            </Box>
                            <Box mb='2'>
                                Unlimited customization of design elements
                            </Box>
                            <Box mb='2'>
                                Unlimited attempts to rewrite contents using AI
                            </Box>
                            <Box mb='2'>
                                Site hosting with SSL
                            </Box>
                            <Box mb='2'>
                                Custom domain
                            </Box>
                            <Box mb='2'>
                                SEO optimization
                            </Box>
                            <Box mb='2'>
                                Web traffic analytics
                            </Box>
                            <Box mb='2'>
                                Form data submission dashboard
                            </Box>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Box w='100%' p={2} textAlign={'center'}>
                                <Text fontSize={'sm'} mb='2'>Register Interest now to get 50% discount</Text>
                                <Button type="button"
                                        variant="solid"
                                        colorScheme="blue"
                                        onClick={() => goToContact()}>
                                    Register Interest
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Container>
        </BaseBox>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Pricing;
