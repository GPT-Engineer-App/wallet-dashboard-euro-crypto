import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Register = () => {
  return (
    <Box maxWidth="500px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Register
      </Heading>
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email" mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" mt={8} width="full">
        Register
      </Button>
    </Box>
  );
};

export default Register;
