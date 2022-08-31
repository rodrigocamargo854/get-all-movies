import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Link href={`/treading/day`}>
        <Text
          as="button"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
          border="none"
          borderRadius="20px"
          color="blue.300"
          backgroundColor="gray.500"
        >
          Get all Movies
        </Text>
      </Link>
    </Flex>
  );
}
