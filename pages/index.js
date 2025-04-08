import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      bg="gray.900"
      px={6}
      textAlign="center"
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        color="white"
        mb={6}
        maxW="800px"
      >
        Dive In & Discover the Most Sought-After Movies of the Day & Week
      </Text>

      <Link href={`/treading/day`} passHref>
        <Button
          as="a"
          fontSize="xl"
          fontWeight="bold"
          px="6"
          py="4"
          borderRadius="12px"
          bg="white"
          color="gray.900"
          _hover={{
            bg: "gray.700",
            color: "white",
            transform: "scale(1.05)",
          }}
          transition="all 0.3s"
        >
          Explore Movies
        </Button>
      </Link>
    </Flex>
  );
}
