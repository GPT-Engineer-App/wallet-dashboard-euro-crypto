import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Select, Stack, Image, useToast } from "@chakra-ui/react";
import { FaEuroSign, FaBitcoin } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [depositMethod, setDepositMethod] = useState("sepa");
  const [exchangeFrom, setExchangeFrom] = useState("eur");
  const [exchangeTo, setExchangeTo] = useState("btc");
  const [exchangeAmount, setExchangeAmount] = useState("");
  const toast = useToast();

  const handleDeposit = () => {
    if (depositAmount && parseFloat(depositAmount) > 0) {
      setBalance(balance + parseFloat(depositAmount));
      setDepositAmount("");
      toast({
        title: "Deposit Successful",
        description: `Deposited ${depositAmount} EUR via ${depositMethod.toUpperCase()}.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleExchange = () => {
    if (exchangeAmount && parseFloat(exchangeAmount) > 0) {
      toast({
        title: "Exchange Successful",
        description: `Exchanged ${exchangeAmount} ${exchangeFrom.toUpperCase()} to ${exchangeTo.toUpperCase()}.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Wallet Dashboard
      </Heading>
      <Box borderWidth={1} borderRadius="lg" padding={6} boxShadow="md" marginBottom={8}>
        <Text fontSize="2xl" fontWeight="bold" marginBottom={4}>
          Balance: {balance.toFixed(2)} EUR
        </Text>
        <Image src="https://images.unsplash.com/photo-1621378864046-0122e4a415a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWxsZXQlMjB3aXRoJTIwZXVybyUyMGJhbmtub3Rlc3xlbnwwfHx8fDE3MTI1Mjc0MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wallet" borderRadius="md" marginBottom={4} />
      </Box>
      <Box marginBottom={8}>
        <Heading as="h2" size="lg" marginBottom={4}>
          Deposit Funds
        </Heading>
        <Stack direction="row" spacing={4} alignItems="center">
          <Input placeholder="Amount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
          <Select value={depositMethod} onChange={(e) => setDepositMethod(e.target.value)}>
            <option value="sepa">SEPA</option>
            <option value="crypto">Crypto</option>
          </Select>
          <Button leftIcon={<FaEuroSign />} colorScheme="green" onClick={handleDeposit}>
            Deposit
          </Button>
        </Stack>
      </Box>
      <Box>
        <Heading as="h2" size="lg" marginBottom={4}>
          Exchange
        </Heading>
        <Stack direction="row" spacing={4} alignItems="center">
          <Input placeholder="Amount" value={exchangeAmount} onChange={(e) => setExchangeAmount(e.target.value)} />
          <Select value={exchangeFrom} onChange={(e) => setExchangeFrom(e.target.value)}>
            <option value="eur">EUR</option>
            <option value="btc">BTC</option>
          </Select>
          <Select value={exchangeTo} onChange={(e) => setExchangeTo(e.target.value)}>
            <option value="eur">EUR</option>
            <option value="btc">BTC</option>
          </Select>
          <Button leftIcon={<FaBitcoin />} colorScheme="blue" onClick={handleExchange}>
            Exchange
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
