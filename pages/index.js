import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      w="100wh"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      bg="gray.900"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        letterSpacing="tight"
        color="white"
        mb="4"
      >
        Dive In & Discover the Most Sought-After Movies of the Day & Week
      </Text>

      <Link href={`/treading/day`}>
        <Box
          as="button"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="tight"
          px="8"
          py="4"
          border="2px solid white"
          borderRadius="20px"
          color="white"
          _hover={{ bg: "gray.800" }}
          transition="background 0.3s"
        >
          Explore Movies
        </Box>
      </Link>
    </Flex>
  );
}
