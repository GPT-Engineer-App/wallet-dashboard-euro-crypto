import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxWidth="800px" margin="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Wallet Dashboard
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/profile" mr={4}>
          Profile
        </Link>
        <Link as={RouterLink} to="/login" mr={4}>
          Login
        </Link>
        <Link as={RouterLink} to="/register">
          Register
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
