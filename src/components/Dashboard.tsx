import * as React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Dashboard = () => {
  const bgColor = useColorModeValue(
    "linear(to-r, purple.400, purple.700)",
    "linear(to-r, purple.500, purple.900)"
  );
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box
      as="main"
      pt="80px"
      minH="calc(100vh - 80px)"
      bgGradient={bgColor}
      color={textColor}
      px={{ base: 4, md: 6 }}
      py={4}
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={4}>
          Manage your transport
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
          Welcome to your Solana-themed dashboard. Manage your transport options
          efficiently.
        </Text>
      </Flex>
    </Box>
  );
};

export default Dashboard;
