import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box maxWidth="500px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        User Profile
      </Heading>
      <Text fontSize="xl">Username: JohnDoe</Text>
      <Text fontSize="xl">Email: john@example.com</Text>
    </Box>
  );
};

export default Profile;
