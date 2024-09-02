import * as React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const bgColorLight = "rgba(255, 255, 255, 0.8)";
  const bgColorDark = "rgba(26, 32, 44, 0.8)";
  const bgColor = useColorModeValue(bgColorLight, bgColorDark);

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      width="100%"
      maxW="1200px"
      mx="auto"
      bg={bgColor}
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      boxShadow="md"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center" px={6} py={4}>
        <Text fontSize="lg" fontWeight="bold">
          IndiTransport
        </Text>
        <Flex align="center">
          <Link
            href="#booking"
            _hover={{ textDecoration: "underline" }}
            mr={10}
          >
            Booking Now
          </Link>
          <Link
            href="#aboutus"
            _hover={{ textDecoration: "underline" }}
            mr={10}
          >
            About Us
          </Link>
          <IconButton
            icon={<FiMenu />}
            aria-label="Open menu"
            variant="ghost"
            mr={2}
            display={{ base: "block", md: "none" }}
          />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
