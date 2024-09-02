import * as React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import landing from "../assets/landing.png";

const Dashboard = () => {
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box
      as="main"
      pt="80px"
      minH="calc(100vh - 80px)"
      bgImage={landing}
      bgRepeat="no-repeat"
      bgSize={{ base: "auto 400px", md: "cover" }} // Adjusts the size of the background
      bgPosition={{ base: "center center", md: "center" }} // Positions the background
      color={textColor}
      px={{ base: 4, md: 6 }}
      py={4}
      borderRadius={14}
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text
          fontSize={{ base: "xl", md: "4xl" }} // Smaller font size on small screens
          fontWeight="bold"
          mt={24}
        >
          Manage your transport
        </Text>
      </Flex>
    </Box>
  );
};

export default Dashboard;
