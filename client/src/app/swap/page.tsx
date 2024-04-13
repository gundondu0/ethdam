"use client"
import SwapBox from '@/components/SwapBox';
import WithdrawBox from '@/components/WithdrawBox';
import { Flex, HStack, Spacer, VStack, Text, Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex direction="row" align="flex-start" mt="7vh" mr="7vw" ml="7vw">
      <Flex direction="column" align="center" w="40vw">
        <Text fontSize="2xl" fontWeight="bold" color="text">
          Deposit
        </Text>
        <SwapBox />
      </Flex>
      <Spacer minW="4" />

      <Flex direction="column" align="center" w="40vw">
        <Text fontSize="2xl" fontWeight="bold" color="text">
          Withdraw
        </Text>
        <WithdrawBox />
      </Flex>
    </Flex>
  );
}