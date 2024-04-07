import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box maxWidth="500px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Login
      </Heading>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" mt={8} width="full">
        Login
      </Button>
    </Box>
  );
};

export default Login;
