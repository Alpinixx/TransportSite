import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutUs = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const headingColor = useColorModeValue("purple.700", "purple.300");

  return (
    <Box
      as="section"
      px={{ base: 4, md: 6 }}
      py={{ base: 6, md: 8 }}
      maxW="1200px"
      mx="auto"
      color={textColor}
    >
      <Flex direction="column" align="center" mb={8}>
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          color={headingColor}
          mb={4}
        >
          About Us
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="800px"
        >
          Welcome to our application! We are dedicated to providing you with the
          best tools to manage your transport options efficiently. Our mission
          is to simplify and enhance your experience, making your transportation
          management seamless and effective.
        </Text>
      </Flex>

      <Box mt={8}>
        <Heading
          as="h2"
          size={{ base: "md", md: "lg" }}
          color={headingColor}
          mb={4}
        >
          Contact Us
        </Heading>
        <Stack spacing={4}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            If you have any questions or need support, feel free to reach out to
            us. We're here to help!
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            <strong>Email:</strong>{" "}
            <Link href="mailto:support@myapplication.com" color={headingColor}>
              support@myapplication.com
            </Link>
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            <strong>Phone:</strong>{" "}
            <Link href="tel:+1234567890" color={headingColor}>
              +1 (234) 567-890
            </Link>
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            <strong>Address:</strong> 1234 Solana Street, Blockchain City,
            Crypto Country
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutUs;
