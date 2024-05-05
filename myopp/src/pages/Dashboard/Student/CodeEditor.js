import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../theme/theme";
import CoED from "../../../components/CE/CoED";

const CodeEditor = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
          <CoED />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default CodeEditor;
