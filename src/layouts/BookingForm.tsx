import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import AsyncSelect from "react-select/async";
import Loader from "@react-google-maps/api";

const transportTypes = new Map<string, string>([
  ["moto_delivery", "Moto Delivery"],
  ["taxi", "Taxi"],
  ["uber_lift_indriver", "Uber/Lift/InDriver"],
  ["pickup_truck", "Pickup Truck"],
  ["5_ton_truck", "5-ton Truck"],
  ["long_tail_trailer", "Long Tail Trailer"],
  ["small_bus", "Small 12 to 36 Seater Bus"],
  ["travel_bus_service", "Travel Bus Service"],
  ["boat", "Boat"],
  ["sail_boat", "Sail Boat"],
  ["yacht", "Yacht"],
  ["shared_container", "Shared Container"],
  ["airships", "Airships"],
  ["air_shipping_services", "Air Shipping Services"],
  ["airline_charter_services", "Airline Charter Services"],
  ["airline_regular_services", "Airline Regular Services"],
  ["helicopter", "Helicopter"],
]);

const fetchCities = async (inputValue: string) => {
  if (!inputValue) return [];

  // Fetch all countries and their cities
  const response = await fetch("https://countriesnow.space/api/v0.1/countries");
  const data = await response.json();

  const cities = data.data
    .flatMap((country: any) => country.cities) // Combine all cities from all countries into one array
    .filter((city: string) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    ) // Filter cities based on input
    .map((city: string) => ({
      label: city,
      value: city,
    }));

  return cities;
};

const BookingForm = () => {
  const headingColor = useColorModeValue("gray.700", "white");
  const [userRole, setUserRole] = useState("user");
  const [transportType, setTransportType] = useState("taxi");

  return (
    <Box>
      <Heading
        as="h1"
        size={{ base: "lg", md: "xl" }}
        color={headingColor}
        textAlign="center"
        my={4}
      >
        Booking
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Box flex="1">
          <FormControl mb={4}>
            <FormLabel>User Role</FormLabel>
            <Select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="service_provider">Service Provider</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Type of Transport</FormLabel>
            <Select
              value={transportType}
              onChange={(e) => setTransportType(e.target.value)}
            >
              {Array.from(transportTypes.entries()).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Location From</FormLabel>
            <AsyncSelect
              loadOptions={fetchCities}
              defaultOptions
              placeholder="Type to search for a city"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Location To</FormLabel>
            <AsyncSelect
              loadOptions={fetchCities}
              defaultOptions
              placeholder="Type to search for a city"
            />
          </FormControl>
        </Box>
        <Box flex={2} borderRadius={12} bgColor={headingColor}></Box>
      </Flex>
    </Box>
  );
};

export default BookingForm;
