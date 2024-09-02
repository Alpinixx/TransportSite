import * as React from "react";
import { Box, Text, Flex, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      py={8}
      px={8}
      boxShadow="md"
      borderTopWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          © {new Date().getFullYear()} IndiTransport Taxi Booking. All rights
          reserved.
        </Text>
        <Flex mt={{ base: 2, md: 0 }}>
          <Link href="#" mx={2} _hover={{ textDecoration: "underline" }}>
            Terms
          </Link>
          <Link href="#" mx={2} _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
