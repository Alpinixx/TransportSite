import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Dashboard from "./components/Dashboard";
import AboutUs from "./layouts/AboutUs";
import BookingForm from "./layouts/BookingForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box maxW="1200px" mx="auto">
      <Header />
      <Dashboard />
      <BookingForm />
      <AboutUs />
      <Footer />
    </Box>
  </ChakraProvider>
);
