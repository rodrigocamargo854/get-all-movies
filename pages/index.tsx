import React from "react";

import { Flex, Button, Text } from "@chakra-ui/react";
import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Link href={`/treading`}>
        <a>
          <Text>Get all Movies</Text>
        </a>
      </Link>
    </Flex>
  );
}
