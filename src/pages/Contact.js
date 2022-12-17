import React from "react";
import LandingLayout from "../components/layouts/LandingLayout";
import { Container, Box } from "@chakra-ui/react";
export default function Contact() {
  return (
    <LandingLayout>
      <Container maxW="2xl" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="lg">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </LandingLayout>
  );
}
