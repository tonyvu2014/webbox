// Basic Imports
import React from "react";

// Chakra UI Imports
import { Image, Flex, Link } from "@chakra-ui/react";

const MainHeroImage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Flex
        position="relative"
        justify={{
          base: "end",
          lg: "end",
          md: "center",
          sm: "center",
          xs: "center",
        }}
        my={{ base: 0, lg: 0, md: 20, sm: 20, xs: 20 }}
        mb={{ base: 0, lg: 0, md: 20, sm: 20, xs: 20 }}
      >
         <Image
              src="/assets/hero-ai-website-generator.png"
              alt="AI Website Generator"
              position="relative"
              />
      </Flex>
      <Link style={{float:"right"}} color="grey.100" fontSize={8} href="https://www.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_13399753.htm#fromView=search&page=1&position=1&uuid=49a56cad-a0e5-4394-90f4-f91cdaa7b0ae">Image by jcomp on Freepik</Link>
    </React.Fragment>
  );
};

export default MainHeroImage;
