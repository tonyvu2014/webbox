// Basic Imports
import { NextPage } from "next";

import {
    Container,
    Heading
  } from "@chakra-ui/react";

// Components Imports
import Header from "@/website/Header";
import FormfacadeEmbed from "@formfacade/embed-react";
import Footer from "@/website/Footer/Footer";
import BaseSeo from "@/modules/components/BaseSeo";
import BaseBox from "@/modules/components/BaseBox";

const Contact: NextPage = (props: any) => {
  return (
    <div>
      <BaseSeo title='Registration Form'/>

      <main>
        <Header />
        <BaseBox>
            <Container maxW="container.md" m="auto" mt="4" centerContent>
              <Heading as="h1" mb="4">Registration Form</Heading>         
              <FormfacadeEmbed
                formFacadeURL="https://formfacade.com/include/110581543394745721401/form/1FAIpQLSfsrThogKVdPBRsCUJJ6meIXM9jCdGCYLRsIdq5D7oF-A_ufg/classic.js/?div=ff-compose"
                onSubmitForm={() => console.log('Form submitted')}
                />
            </Container>
        </BaseBox>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Contact;
