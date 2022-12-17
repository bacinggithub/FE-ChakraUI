import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { AiFillSchedule } from "react-icons/ai";

export default function Signup() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="3xl">Update On Progres</Text>
      <Link href="/">
        <Flex alignItems="center" gap="2">
          Go Home <AiFillSchedule />
        </Flex>
      </Link>
    </Flex>
  );
}
