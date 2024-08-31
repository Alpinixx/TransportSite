import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import OrderStep from "./components/OrderStep";
import Dashboard from "./components/Dashboard";
import AboutUs from "./layouts/AboutUs";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Dashboard />
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <OrderStep />
    <AboutUs />
    <Footer />
  </ChakraProvider>
);
