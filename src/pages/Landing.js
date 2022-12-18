import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <SimpleGrid minChildWidth="425px" spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </LandingLayout>
  );
}
