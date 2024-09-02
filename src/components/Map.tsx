import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Box, Input, Button, VStack } from "@chakra-ui/react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const GoogleMapComponent = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const calculateRoute = () => {
    if (!origin || !destination) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK && result) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <Box mb={4}>
        <VStack spacing={4}>
          <Input
            placeholder="Enter origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Input
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Button onClick={calculateRoute} colorScheme="purple">
            Calculate Route
          </Button>
        </VStack>
      </Box>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
