import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { FaWallet, FaExchangeAlt, FaHistory } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Wallet Dashboard
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Box bg="white" p={6} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaWallet size="3em" color="blue.500" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Balance
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            1,000 EUR
          </Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaExchangeAlt size="3em" color="green.500" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Exchange
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            0.1 BTC
          </Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaHistory size="3em" color="orange.500" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            History
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            10 Transactions
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
