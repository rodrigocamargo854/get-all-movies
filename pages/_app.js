import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS = {false} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
