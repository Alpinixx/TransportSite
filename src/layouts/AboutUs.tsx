import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaTelegram, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import pointMap from "../assets/point_map.png";

const AboutUs = () => {
  const textColor = useColorModeValue("gray.100", "gray.200");
  const headingColor = useColorModeValue("purple.900", "purple.300");

  return (
    <Box
      id="aboutus"
      as="section"
      position="relative"
      px={{ base: 4, md: 6 }}
      py={{ base: 6, md: 8 }}
      maxW="1200px"
      mx="auto"
      color={textColor}
      bgImage={`url(${pointMap})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "blackAlpha.600",
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          color={headingColor}
          mb={4}
          textAlign="center"
        >
          About Us
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align="center"
          mb={8}
        >
          <Box px={10}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              textAlign="center"
              maxW="800px"
            >
              Select the best people and keep them in your contracts. Use them
              directly or though our platform to get Bitcoin rewards, reputation
              points, and dispute protection.
            </Text>
            <Flex justify="center" gap={{ base: 6, sm: 12 }} mt={8}>
              <Link href="https://telegram.org" isExternal>
                <Icon as={FaTelegram} boxSize={6} color={headingColor} />
              </Link>
              <Link href="https://discord.com" isExternal>
                <Icon as={FaDiscord} boxSize={6} color={headingColor} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} color={headingColor} />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={6} color={headingColor} />
              </Link>
            </Flex>
          </Box>
          <Box px={10}>
            <Heading
              as="h2"
              size={{ base: "sm", md: "md" }}
              color={headingColor}
              textAlign="center"
              my={4}
            >
              Contact Us
            </Heading>
            <Stack spacing={4}>
              <Text fontSize={{ base: "sm", md: "md" }}>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:support@myapplication.com"
                  color={headingColor}
                >
                  support@myapplication.com
                </Link>
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                <strong>Phone:</strong>{" "}
                <Link href="tel:+1234567890" color={headingColor}>
                  +1 (234) 567-890
                </Link>
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
